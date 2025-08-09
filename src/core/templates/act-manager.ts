import {DatabaseAdapter} from '../database/adapter.js';
import type {ActTemplate} from './act.js';

export interface CustomActTemplate extends ActTemplate {
  isBuiltIn: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class ActTemplateManager {
  private adapter: DatabaseAdapter;

  constructor() {
    this.adapter = new DatabaseAdapter();
  }

  async createTemplate(template: {
    id: string;
    label: string;
    category: string;
    description: string;
    template: string;
  }): Promise<void> {
    const exists = await this.adapter.templateExists(template.id);
    if (exists) {
      throw new Error(`Template with ID '${template.id}' already exists`);
    }

    await this.adapter.createActTemplate(template);
  }

  async updateTemplate(
    id: string,
    updates: Partial<
      Pick<CustomActTemplate, 'label' | 'category' | 'description' | 'template'>
    >,
  ): Promise<void> {
    const updated = await this.adapter.updateActTemplate(id, updates);
    if (!updated) {
      throw new Error(`Template '${id}' not found or could not be updated`);
    }
  }

  async deleteTemplate(id: string): Promise<void> {
    const deleted = await this.adapter.deleteActTemplate(id);
    if (!deleted) {
      throw new Error(`Template '${id}' not found or could not be deleted`);
    }
  }

  async getTemplate(id: string): Promise<CustomActTemplate | null> {
    const row = await this.adapter.getActTemplate(id);
    return row ? this.mapToCustomActTemplate(row) : null;
  }

  async listCustomTemplates(): Promise<CustomActTemplate[]> {
    const rows = await this.adapter.listActTemplates(true);
    return rows.map(this.mapToCustomActTemplate);
  }

  async listAllTemplates(): Promise<CustomActTemplate[]> {
    const rows = await this.adapter.listActTemplates(false);
    return rows.map(this.mapToCustomActTemplate);
  }

  private mapToCustomActTemplate(row: any): CustomActTemplate {
    return {
      id: row.id,
      label: row.label,
      category: row.category,
      description: row.description,
      template: row.template,
      isBuiltIn: Boolean(row.is_built_in),
      createdAt: new Date(row.created_at * 1000),
      updatedAt: new Date(row.updated_at * 1000),
    };
  }
}

export function getResponseMetadata({
  created_at,
  id,
  model,
}: {
  created_at?: string | undefined | null;
  id?: string | undefined | null;
  model?: string | undefined | null;
}) {
  return {
    id: id ?? undefined,
    modelId: model ?? undefined,
    timestamp: created_at ? new Date(created_at) : undefined,
  };
}

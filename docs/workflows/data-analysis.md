# Data Analysis Workflow

**ID: WF-006**  
**Category: Data Science**  
**Complexity: Intermediate to Advanced**  
**Time: 15-90 minutes depending on complexity**

## Overview

Comprehensive data analysis workflows using AI assistance for data exploration, statistical analysis, visualization, machine learning, and reporting across various data formats and domains.

## Prerequisites

- Rawi configured with a suitable provider
- Data files (CSV, JSON, Excel, databases)
- Basic understanding of data analysis concepts
- Python/R environment (optional for advanced analysis)

## Workflow Steps

### 1. Data Exploration and Profiling

Initial data understanding and quality assessment:

```bash
# Explore CSV data structure
rawi ask --file sales-data.csv "Analyze this dataset structure, data types, missing values, and provide initial insights"

# Profile dataset quality
rawi ask --file customer-data.xlsx "Perform comprehensive data quality assessment including duplicates, outliers, and inconsistencies"

# Multi-file data exploration
rawi ask --files sales.csv customers.csv products.csv "Analyze relationships between these datasets and suggest join strategies"
```

### 2. Statistical Analysis

Perform comprehensive statistical analysis:

```bash
# Descriptive statistics
rawi ask --file survey-data.csv --act data-analyst "Generate comprehensive descriptive statistics and identify key patterns"

# Correlation analysis
rawi ask --file financial-data.csv --act statistician "Perform correlation analysis and identify significant relationships between variables"

# Hypothesis testing
rawi ask --file experiment-results.csv --act statistician "Perform appropriate statistical tests to validate experimental hypotheses"
```

### 3. Data Visualization Recommendations

Generate visualization strategies and code:

```bash
# Visualization strategy
rawi ask --file time-series-data.csv --act data-visualizer "Recommend optimal visualization strategies for this time series data"

# Python visualization code
rawi ask --file sales-data.csv --act data-scientist "Generate Python code using matplotlib/seaborn for comprehensive data visualization"

# Dashboard specifications
rawi ask --file kpi-data.csv --act dashboard-designer "Design dashboard layout and visualizations for business KPIs"
```

### 4. Machine Learning Analysis

Apply machine learning techniques:

```bash
# ML model recommendations
rawi ask --file customer-churn.csv --act machine-learning-engineer "Recommend appropriate ML models for customer churn prediction"

# Feature engineering
rawi ask --file raw-features.csv --act data-scientist "Suggest feature engineering techniques to improve model performance"

# Model evaluation
rawi ask --file model-results.csv --act ml-engineer "Analyze model performance metrics and suggest improvements"
```

### 5. Automated Data Analysis Script

Comprehensive data analysis automation:

```bash
#!/bin/bash
# data-analysis-pipeline.sh - Comprehensive data analysis workflow

set -e

DATA_FILE=${1:-"data.csv"}
ANALYSIS_TYPE=${2:-"exploratory"}  # exploratory, statistical, ml, business
OUTPUT_DIR="analysis_$(date +%Y%m%d_%H%M%S)"

echo "📊 Starting data analysis for $DATA_FILE"

# Create analysis directory structure
mkdir -p "$OUTPUT_DIR"/{reports,visualizations,insights,code,documentation}

# 1. Data profiling and quality assessment
echo "🔍 Performing data profiling..."
rawi ask --file "$DATA_FILE" --act data-analyst "
Perform comprehensive data profiling including:
- Dataset structure and dimensions
- Data types and formats
- Missing value analysis
- Duplicate record detection
- Outlier identification
- Data quality score
- Summary statistics
- Initial observations and concerns
" > "$OUTPUT_DIR/reports/data-profile.md"

# 2. Exploratory data analysis
echo "📈 Conducting exploratory data analysis..."
rawi ask --file "$DATA_FILE" --act data-scientist "
Conduct thorough exploratory data analysis including:
- Distribution analysis for all variables
- Correlation matrix and relationships
- Trend identification and patterns
- Seasonal patterns (if time-based)
- Categorical variable analysis
- Numerical variable distributions
- Potential data transformations needed
- Business insights and opportunities
" > "$OUTPUT_DIR/reports/eda-report.md"

# 3. Statistical analysis
echo "📊 Performing statistical analysis..."
rawi ask --file "$DATA_FILE" --act statistician "
Perform comprehensive statistical analysis including:
- Descriptive statistics summary
- Hypothesis testing recommendations
- Confidence interval calculations
- Statistical significance tests
- Variance analysis
- Regression analysis opportunities
- Time series analysis (if applicable)
- Statistical assumptions validation
" > "$OUTPUT_DIR/reports/statistical-analysis.md"

# 4. Generate visualization code
echo "📊 Generating visualization code..."
rawi ask --file "$DATA_FILE" --act data-visualizer "
Generate Python visualization code using matplotlib, seaborn, and plotly including:
- Distribution plots for all variables
- Correlation heatmaps
- Scatter plots for relationships
- Time series plots (if applicable)
- Box plots for outlier detection
- Categorical variable visualizations
- Interactive dashboard components
- Export functionality for reports
" > "$OUTPUT_DIR/code/visualizations.py"

# 5. Business insights generation
echo "💡 Generating business insights..."
rawi ask --file "$DATA_FILE" --act business-analyst "
Generate actionable business insights including:
- Key performance indicators
- Business opportunities identified
- Risk factors and concerns
- Recommended actions
- Resource allocation suggestions
- Market trends and patterns
- Customer behavior insights
- Revenue optimization opportunities
" > "$OUTPUT_DIR/insights/business-insights.md"

# 6. Data quality recommendations
echo "🔧 Generating data quality recommendations..."
rawi ask --file "$DATA_FILE" --act data-engineer "
Provide data quality improvement recommendations including:
- Data cleaning procedures
- Missing value handling strategies
- Outlier treatment approaches
- Data validation rules
- Data governance suggestions
- ETL pipeline improvements
- Data collection optimization
- Quality monitoring frameworks
" > "$OUTPUT_DIR/reports/data-quality-recommendations.md"

# 7. Machine learning opportunities
if [ "$ANALYSIS_TYPE" = "ml" ] || [ "$ANALYSIS_TYPE" = "exploratory" ]; then
    echo "🤖 Identifying ML opportunities..."
    rawi ask --file "$DATA_FILE" --act machine-learning-engineer "
    Identify machine learning opportunities including:
    - Suitable ML problem types (classification, regression, clustering)
    - Feature engineering recommendations
    - Model selection strategies
    - Training/validation split suggestions
    - Performance metrics to track
    - Deployment considerations
    - A/B testing frameworks
    - Model monitoring strategies
    " > "$OUTPUT_DIR/insights/ml-opportunities.md"
fi

# 8. Generate data preprocessing code
echo "🛠️  Generating preprocessing code..."
rawi ask --file "$DATA_FILE" --act data-engineer "
Generate Python data preprocessing code including:
- Data loading and validation
- Missing value imputation
- Outlier detection and treatment
- Data type conversions
- Feature scaling and normalization
- Categorical encoding
- Feature selection
- Data splitting for ML
" > "$OUTPUT_DIR/code/preprocessing.py"

# 9. Create executive summary
echo "📋 Creating executive summary..."
rawi ask --files "$OUTPUT_DIR/reports/*.md" "$OUTPUT_DIR/insights/*.md" --act business-analyst "
Create executive summary based on all analysis reports including:
- Key findings and insights
- Critical business recommendations
- Data quality assessment
- Implementation priorities
- Resource requirements
- Expected outcomes and ROI
- Next steps and timeline
- Risk mitigation strategies
" > "$OUTPUT_DIR/executive-summary.md"

# 10. Generate documentation
echo "📚 Generating documentation..."
rawi ask --file "$DATA_FILE" --act technical-writer "
Create comprehensive analysis documentation including:
- Methodology explanation
- Data sources and collection methods
- Analysis procedures and tools used
- Assumptions and limitations
- Reproducibility instructions
- Code documentation
- Appendices with detailed results
- Glossary of terms
" > "$OUTPUT_DIR/documentation/analysis-documentation.md"

echo "✅ Data analysis complete!"
echo "📊 Analysis results saved to: $OUTPUT_DIR"
echo "📄 Generated reports:"
find "$OUTPUT_DIR" -name "*.md" | sort
```

### 6. Specialized Data Analysis

#### Financial Data Analysis

```bash
# Financial performance analysis
rawi ask --file financial-statements.xlsx --act financial-analyst "
Analyze financial performance including:
- Profitability ratios and trends
- Liquidity and solvency analysis
- Cash flow analysis
- Revenue growth patterns
- Cost structure optimization
- Investment efficiency metrics
- Risk assessment indicators
"

# Portfolio analysis
rawi ask --file portfolio-data.csv --act investment-analyst "
Perform portfolio analysis including:
- Asset allocation assessment
- Risk-return analysis
- Diversification evaluation
- Performance attribution
- Benchmark comparison
- Optimization recommendations
"
```

#### Marketing Data Analysis

```bash
# Campaign performance analysis
rawi ask --file campaign-data.csv --act marketing-analyst "
Analyze marketing campaign performance including:
- ROI and ROAS calculations
- Channel effectiveness comparison
- Customer acquisition costs
- Conversion funnel analysis
- Audience segmentation insights
- Attribution modeling
- Budget optimization recommendations
"

# Customer behavior analysis
rawi ask --file customer-journey.csv --act customer-analyst "
Analyze customer behavior patterns including:
- Purchase journey mapping
- Churn prediction indicators
- Lifetime value calculations
- Segmentation analysis
- Behavioral triggers identification
- Retention strategy recommendations
"
```

#### Operational Data Analysis

```bash
# Process efficiency analysis
rawi ask --file operations-data.csv --act operations-analyst "
Analyze operational efficiency including:
- Process performance metrics
- Bottleneck identification
- Resource utilization analysis
- Quality metrics assessment
- Cost optimization opportunities
- Productivity improvements
- Automation potential
"

# Supply chain analysis
rawi ask --file supply-chain.csv --act supply-chain-analyst "
Analyze supply chain performance including:
- Inventory optimization
- Supplier performance metrics
- Demand forecasting accuracy
- Lead time analysis
- Cost structure evaluation
- Risk assessment
"
```

### 7. Advanced Analytics

#### Time Series Analysis

```bash
# Time series forecasting
rawi ask --file time-series.csv --act time-series-analyst "
Perform comprehensive time series analysis including:
- Trend and seasonality decomposition
- Stationarity testing
- ARIMA modeling recommendations
- Forecasting accuracy assessment
- Anomaly detection
- Intervention analysis
- Business cycle identification
"

# Predictive modeling
rawi ask --file historical-data.csv --act predictive-analyst "
Develop predictive models including:
- Feature importance analysis
- Model selection and validation
- Hyperparameter optimization
- Cross-validation strategies
- Performance benchmarking
- Deployment considerations
"
```

#### Text Analytics

```bash
# Sentiment analysis
rawi ask --file reviews-data.csv --act nlp-analyst "
Perform text analytics including:
- Sentiment analysis and scoring
- Topic modeling and themes
- Keyword extraction
- Text classification
- Emotion detection
- Content recommendations
- Brand perception analysis
"

# Document analysis
rawi ask --file survey-responses.txt --act text-analyst "
Analyze text data including:
- Thematic analysis
- Content categorization
- Frequency analysis
- Readability assessment
- Language pattern identification
- Summary generation
"
```

### 8. Data Visualization and Reporting

#### Interactive Dashboard Design

```bash
# Dashboard specification
rawi ask --file kpi-data.csv --act dashboard-designer "
Design comprehensive dashboard including:
- KPI visualization layout
- Interactive filter components
- Drill-down capabilities
- Real-time data integration
- Mobile responsiveness
- User access controls
- Export functionality
"

# Visualization best practices
rawi ask --file complex-data.csv --act data-visualizer "
Recommend visualization best practices including:
- Chart type selection
- Color scheme optimization
- Layout and composition
- Accessibility considerations
- Interactive elements
- Performance optimization
- User experience design
"
```

#### Report Automation

```bash
# Automated reporting pipeline
rawi ask --file report-data.csv --act reporting-analyst "
Design automated reporting system including:
- Report template design
- Data refresh schedules
- Distribution mechanisms
- Quality validation checks
- Exception handling
- Performance monitoring
- Version control
"
```

### 9. Data Quality and Governance

#### Data Quality Assessment

```bash
# Comprehensive data quality audit
rawi ask --batch "data/**/*.csv" --act data-quality-analyst "
Perform data quality assessment including:
- Completeness analysis
- Accuracy validation
- Consistency checks
- Timeliness evaluation
- Validity assessment
- Uniqueness verification
- Integrity validation
"

# Data governance framework
rawi ask --act data-governance-expert "
Design data governance framework including:
- Data ownership definitions
- Quality standards and metrics
- Access control policies
- Data lifecycle management
- Compliance requirements
- Audit procedures
- Training programs
"
```

### 10. Advanced Statistical Modeling

#### Experimental Design

```bash
# A/B testing analysis
rawi ask --file ab-test-results.csv --act experimental-designer "
Analyze A/B testing results including:
- Statistical significance testing
- Effect size calculations
- Power analysis
- Confidence intervals
- Multiple testing corrections
- Practical significance assessment
- Recommendation formulation
"

# Causal inference
rawi ask --file observational-data.csv --act causal-analyst "
Perform causal analysis including:
- Confounding variable identification
- Instrumental variable analysis
- Propensity score matching
- Difference-in-differences
- Regression discontinuity
- Sensitivity analysis
"
```

## Data Analysis Best Practices

### 1. Data Quality

- Validate data sources and collection methods
- Check for missing values and outliers
- Ensure data consistency and accuracy
- Document data transformations
- Implement quality monitoring

### 2. Statistical Rigor

- Choose appropriate statistical methods
- Validate assumptions
- Use proper significance levels
- Consider multiple testing corrections
- Report confidence intervals

### 3. Visualization Excellence

- Choose appropriate chart types
- Use clear and intuitive designs
- Ensure accessibility
- Provide proper context
- Enable interactivity when useful

### 4. Reproducibility

- Document analysis procedures
- Version control code and data
- Use reproducible environments
- Provide clear instructions
- Share code and methodologies

## Integration with Tools

### Python Integration

```python
# Python analysis template
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Load and explore data
df = pd.read_csv('data.csv')
print(df.info())
print(df.describe())

# Generated by Rawi analysis recommendations
# [Insert AI-generated analysis code here]
```

### R Integration

```r
# R analysis template
library(dplyr)
library(ggplot2)
library(tidyr)
library(corrplot)

# Load and explore data
data <- read.csv('data.csv')
summary(data)
str(data)

# Generated by Rawi analysis recommendations
# [Insert AI-generated analysis code here]
```

## Related Workflows

- [Research and Analysis Workflow](research.md) - Academic research methods
- [Content Creation Workflow](content-creation.md) - Report writing
- [Documentation Generation](documentation-generation.md) - Analysis documentation

---

**Navigation:**

- [← Back to Workflows](README.md)
- [Next: Security Audit →](security-audit.md)

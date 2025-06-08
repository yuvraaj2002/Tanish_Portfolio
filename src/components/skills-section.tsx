import React from "react";
import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "🧠 Languages",
      items: [
        "Python – Core language for automation, analytics, and ETL",
        "SQL – For querying databases",
        "Bash/Shell – Scripting tasks in Unix-based systems",
        "R (optional) – For statistical modeling",
        "JavaScript/TypeScript – For frontend (if building dashboards)"
      ]
    },
    {
      title: "📦 Python Libraries / Frameworks",
      items: [
        "pandas", "numpy", "matplotlib", "seaborn", "plotly", "bokeh", "polars (faster alternative to pandas)"
      ]
    },
    {
      title: "🧹 Data Cleaning & Processing",
      items: [
        "openpyxl / xlrd / xlsxwriter – Excel automation",
        "pyjanitor – Extended cleaning utilities",
        "pyarrow / fastparquet – Working with parquet files"
      ]
    },
    {
      title: "📈 Analytics / Statistics",
      items: [
        "scipy", "statsmodels", "scikit-learn (for ML basics)"
      ]
    },
    {
      title: "🔄 Automation & Scheduling",
      items: [
        "airflow – Workflow orchestration",
        "luigi",
        "schedule – Lightweight job scheduling",
        "apscheduler",
        "pyautogui – GUI automation",
        "selenium / playwright – Browser automation",
        "beautifulsoup / scrapy – Web scraping"
      ]
    },
    {
      title: "🔌 APIs & Integration",
      items: [
        "requests", "httpx", "pydantic – Data validation", "FastAPI / Flask – Build APIs to expose your data pipelines"
      ]
    },
    {
      title: "🧊 Databases / Warehouses",
      items: [
        "PostgreSQL / MySQL", "MongoDB", "Snowflake", "BigQuery", "Amazon Redshift"
      ]
    },
    {
      title: "📤 ETL / ELT / Pipelines",
      items: [
        "Apache Airflow", "dbt (Data Build Tool)", "Kafka / RabbitMQ – Stream processing", "Spark / PySpark"
      ]
    },
    {
      title: "💾 Storage & Cloud",
      items: [
        "Amazon S3", "Google Cloud Storage", "Azure Blob Storage"
      ]
    },
    {
      title: "☁️ Cloud Platforms",
      items: [
        "AWS (EC2, S3, Lambda, Athena)", "GCP (BigQuery, Cloud Functions)", "Azure (Data Factory, Synapse)"
      ]
    },
    {
      title: "📈 BI / Dashboarding Tools",
      items: [
        "Power BI", "Tableau", "Looker", "Metabase", "Streamlit / Dash / Panel – Python-based dashboards"
      ]
    },
    {
      title: "🧰 DevOps & Productivity",
      items: [
        "Git / GitHub / GitLab", "Docker – Containerize ETL or automation scripts", "VSCode / Jupyter / PyCharm – IDEs for development", "CI/CD – GitHub Actions, GitLab CI"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            My technical skills and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * idx }}
            >
              <Card className="shadow-sm h-full">
                <CardBody className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-default-600">
                    {category.items.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
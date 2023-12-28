import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Bryan Ortiz",
  initials: "BO",
  location: "Des Moines",
  locationLink: "https://www.google.com/maps/place/Des+Moines",
  about:
    "I am an aspiring machine learning engineer eager to apply my data science skills to build innovative artificial intelligence solutions.",
  summary:
    "Analytics specialist with proficiency in Python, SQL, and core data science and machine learning concepts. Track record of assisting students in leveling up their data skills through supplemental instruction in coding, statistics, visualization tools, and key analytical techniques.",
  avatarUrl: "https://avatars.githubusercontent.com/u/130245932?s=400&u=58574c5399d721009447fbd458e595553905ffb2&v=4",
  personalWebsiteUrl: "https://bryan-ortiz0.github.io/",
  contact: {
    email: "ortizbryan54321@gmail.com",
    tel: "5154907304",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/bryan-ortiz0",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bryan-ortiz0/",
        icon: LinkedInIcon,
      }
    ],
  },
  skills: [
    "Python",
    "SQL",
    "R",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Sklearn",
    "Keras",
    "Tensorflow",
    "Tableau",
    "Excel"
  ],
  work: [
    {
      company: "DriveX Network",
      link: "https://www.linkedin.com/company/drive-x/",
      badges: ["Data Analytics"],
      title: "Teaching Assistant - University of The Bahamas",
      logo: "https://media.licdn.com/dms/image/C4E0BAQH80OD6UBrp7w/company-logo_200_200/0/1674943725742/drive_x_logo?e=1711584000&v=beta&t=WfpZYY3Ewh5FbtaseDKhIERBcnHSPj0Xlhxrq28Cbww", // Add logo if available
      start: "Dec 2023",
      end: "Present",
      description: (
        <>
          <li>
            Supported kickoff of new data analytics career pilot program through University of The Bahamas, helping twenty-eight working professionals reskill into data-focused roles.
          </li>
          <li>
            Assisted with SQL (PostgreSQL, MySQL), Tableau, Excel, and Python skill-building modules to further strengthen students' technical capabilities with essential data tools as regional technology sector expands.
          </li>
        </>
      ),
    },
    {
      company: "General Assembly",
      link: "https://generalassemb.ly/",
      badges: ["Data Science / Machine Learning"],
      title: "Teaching Assistant - Data Science Immersive Fellowship",
      logo: "https://media.licdn.com/dms/image/C4E0BAQEwAxD22k-HBw/company-logo_200_200/0/1630655071296/generalassembly_logo?e=1711584000&v=beta&t=zCubQoXEcwrHNUinalIYg5RFprAoBxsjFfptmBQ4rYo", // Add logo if available
      start: "Nov 2023",
      end: "Present",
      description: (
        <>
          <li>
            Partnered with two other instructors to deliver a 12-week comprehensive Data Science Immersive training program, covering the full Data Science toolkit, including Data Visualizations, Python (Seabon, Matplotlib, Pandas), R, SQL (BigQuery, SQLite), Tableau, and Machine Learning.
          </li>
          <li>
            Provided personalized technical guidance to ten students of varying skill levels, overseeing grading rubrics and assessments across key program milestones while assisting with hands-on projects.
          </li>
        </>
      ),
    },
    {
      company: "L'Oréal",
      link: "https://www.loreal.com/en/",
      badges: ["Data Literacy"],
      title: "Instructional Assistant - Data Literacy Program",
      logo: "https://media.licdn.com/dms/image/D4E0BAQFEB_g-FWxSrQ/company-logo_200_200/0/1688397792617/loral_logo?e=1711584000&v=beta&t=y1fFQ9xMERft3GwkkH4ZJyvacfdQzsh12yziOF2LXsQ", // Add logo if available
      start: "Nov 2023",
      end: "Present",
      description: (
        <>
          <li>
            Assisted the lead instructor for L'Oréal's Data Literacy Program (200+ nontechnical participants), covering data democratization best practices, full data lifecycle phases like ETL and data modeling, and introducing data visualization tools like Tableau and PowerBI for transforming processed data into business insights.
          </li>
          <li>
            Collaborated with L'Oréal's team to ensure alignment of expectation for the program. Responsible for polls/trivia questions to keep participants engaged and answer questions, enabling the lead instructor to present smoothly.
          </li>
        </>
      ),
    },
    {
      company: "Focus On Community Uplifting, Self-Esteem & Success (FOCUSS)",
      link: "https://www.facebook.com/FocussInc/",
      badges: ["Python Programming"],
      title: "Data Scientist",
      logo: "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/279302060_182805384077232_8387082812529376351_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Q8eur6c6MZQAX_xcNa6&_nc_ht=scontent-msp1-1.xx&oh=00_AfCRmAcAWOcYbGTMaAshJLsXTI50JG7qBl2OjZCg0d6Ddg&oe=6592141F",
      start: "Oct 2023",
      end: "Present",
      description: (
        <>
          <li>
            Leading the creation of a comprehensive Python coding curriculum for high school district within the FOCUSS group.
          </li>
          <li>
            Foster student learning and engagement through hands-on coding exercises and projects in Jupyter notebooks/integrated development environments (IDEs) like VSCode, while leveraging bilingual fluency in Spanish and English to build interpersonal connections with broader range of students across language barriers.
          </li>
        </>
      ),
    },
  ],
  projects: [
    {
      title: "Go Bot",
      techStack: ["python", "deep learning", "monte carlo tree search (MCTS)", "keras"],
      description:
        "Engineered a Go-playing bot utilizing Convolutional Neural Networks (CNN) to understand intricate dynamics in the game of Go, showing an accuracy reaching 15% (baselined: .028%).",
      link: {
        label: "Go Bot",
        href: "https://github.com/bryan-ortiz0/go_bot",
      },
    },
    {
      title: "Examining Water Usage",
      techStack: ["python", "pandas", "k-means clustering", "dbscan", "git"],
      description:
        "Using K-means clustering to group counties based on water use patterns showed big differences in how much water is used for things like watering crops, supplying homes, and mining across counties. The results indicate specific chances for counties to work together to use water better in raising animals, mining, and fish farming as well as hints that people with higher incomes may use more water.",
      link: {
        label: "Examing Water Usage ",
        href: "https://github.com/bryan-ortiz0/examining_water_usage",
      },
    },
    {
      title: "Subreddit NLP",
      techStack: ["machine learning", "natural language processing", "random forest", "naive bayes"],
      description:
        "Designed and implemented models to categorize posts with 85-87% accuracy from online posts between two communities, showing potential to understand more about the groups through their language.",
      link: {
        label: "Subreddit NLP",
        href: "https://github.com/bryan-ortiz0/reddit_posts_ML",
      },
    },
    {
      title: "Ames Housing Price Prediction",
      techStack: ["python", "supervised machine learning", "ridge regression"],
      description:
        "Employed linear regression techniques in Jupyter notebook to analyze Ames, Iowa housing data from CSV files, achieving an 89% accuracy in predicting sales prices for upcoming listings.",
      link: {
        label: "Ames Housing Price Prediction",
        href: "https://github.com/bryan-ortiz0/ames_housing_analysis",
      },
    },
  ],
  
  education: [
    {
      school: "University of Iowa",
      degree: "B.Science. Neuroscience",
      start: "2015",
      end: "2019",
    },
    {
      school: "General Assembly",
      degree: "Data Science Immersive Fellowship",
      start: "2023",
      end: "2023",
    },
  ],
} as const;

import { ResumeIcon } from "../components/icons/ResumeIcon";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Bryan Ortiz",
  initials: "BO",
  location: "Des Moines",
  locationLink: "https://www.google.com/maps/place/Des+Moines",
  about:
    "Welcome to my data science portfolio.",
  summary:
    "I am working to become a machine learning engineer to build innovative AI solutions. My current expertise includes Python, SQL, data science fundamentals and helping others improve their analytical talents. I am eager to apply my coding, statistical and core machine learning competencies to create technological advances through artificial intelligence.",
  avatarUrl: "https://avatars.githubusercontent.com/u/130245932?s=400&u=b744f701aa4aac096506c96b8efab0fb6b0b549b&v=4",
  personalWebsiteUrl: "https://bryan-ortiz0.github.io/",
  contact: {
    email: "ortizbryan54321@gmail.com",
    tel: "5154907304",
    social: [
      {
        name: "Resume",
        url: "https://drive.google.com/file/d/1Qpn1cDk-Bb9DAjfylm7NW8Pyyd0kZsdg/view?usp=sharing",
        icon: ResumeIcon,
      },
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
    "MySQL",
    "PostgreSQL",
    "BigQuery",
    "R",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Sklearn",
    "Keras",
    "Tensorflow",
    "Tableau",
    "Excel",
    "Bilingual"
  ],
  work: [
    {
      company: "DriveX Network",
      link: "https://www.linkedin.com/company/drive-x/",
      badges: ["Data Analytics"],
      title: "Teaching Assistant - University of The Bahamas",
      logo: "https://media.licdn.com/dms/image/C4E0BAQH80OD6UBrp7w/company-logo_200_200/0/1674943725742/drive_x_logo?e=1712188800&v=beta&t=y5e9PZ1J3y523JDcem5jh0sQrqxKYmzyKkpW9v9RhEY", // Add logo if available
      start: "Dec 2023",
      end: "Present",
      description:
        "Contributed to the introduction of an innovative data analytics career training program at the University of the Bahamas, coaching 28 professionals as they gained in-demand skills for technology jobs. Instructed them in essential database tools (MySQL), data visualization platforms (Tableau and Excel), and Python to arm them with indispensable expertise, securing successful transitions into growing regional data science roles.",
    },
    {
      company: "General Assembly",
      link: "https://generalassemb.ly/",
      badges: ["Data Science / Machine Learning"],
      title: "Teaching Assistant - Data Science Immersive Fellowship",
      logo: "https://media.licdn.com/dms/image/C4E0BAQEwAxD22k-HBw/company-logo_200_200/0/1630655071296/generalassembly_logo?e=1712188800&v=beta&t=4WRXcEV3qCdCkt0KGF_NJ3_s2tl5XeQzQCJ9GrKzniQ", // Add logo if available
      start: "Nov 2023",
      end: "Present",
      description:
        "Co-delivered a 12-week, thorough Data Science Immersive training program featuing Tableau, Python, R, SQL, and Machine Learning. Guided ten students with varying abilities, facilitating hands-on projects and monitoring assessment rubrics for major milestones.",
    },
    {
      company: "L'Oréal",
      link: "https://www.loreal.com/en/",
      badges: ["Data Literacy"],
      title: "Instructional Assistant - Data Literacy Program",
      logo: "https://media.licdn.com/dms/image/D4E0BAQFEB_g-FWxSrQ/company-logo_200_200/0/1688397792617/loral_logo?e=1712188800&v=beta&t=nK0paqTNcHiaRJgSNJOtRtx_jDHbzXC9SwQ6iIUHCxw", // Add logo if available
      start: "Nov 2023",
      end: "Present",
      description:
        "Supported lead instructor for L'Oréal's Data Literacy Program for 200+ non-technical participants, tackling data democratization, data lifecycle stages such as ETL and data modeling, and data visualization tools like Tableau and PowerBI. Facilitated coordiation with L'Oréal's team, handled participant interactions via polls/trivia, and addressed questions, resulting in a flawless presentation by the lead instructor.",
    },
    {
      company: "Focus On Community Uplifting, Self-Esteem & Success (FOCUSS)",
      link: "https://www.facebook.com/FocussInc/",
      badges: ["Python Programming"],
      title: "Python Curriculum Developer & Instructor",
      logo: "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/279302060_182805384077232_8387082812529376351_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Q8eur6c6MZQAX_xcNa6&_nc_ht=scontent-msp1-1.xx&oh=00_AfBK4AO7if0HU4w-9Z7LI88xfkmBjTBrPeg7_C2VwcNEwA&oe=65940E5F",
      start: "Oct 2023",
      end: "Present",
      description:
        "Directed Python coding curriculum development for a high school district, promoting learning via hands-on exercises and projects in Jupyter notebooks/VSCode, and establishing rapport with multilingual students using dual-language fluency.",
    },
  ],
  projects: [
    {
      title: "Forecasted Ethereum Prices Using Machine Learning",
      techStack: ["Python", "Pandas", "NumPy", "TensorFlow", "Keras", "XGBoost", "Hugging Face"],
      description:
        "Analyzed 6 years of hourly Ethereum pricing data from Bitstamp. Developed machine learning pipelines evaluating 5 models including XGBoost, achieving 99.3% predictive power on holdout data.",
      link: {
        label: "Forecasted Ethereum Prices Using Machine Learning",
        href: "https://github.com/bryan-ortiz0/crypto-forecast-analysis",
      },
    },  
    {
      title: "Go Bot",
      techStack: ["Python", "Deep Learning", "Monte Carlo Tree Search", "Keras"],
      description:
        "Engineered a Go-playing bot utilizing Convolutional Neural Networks (CNN) to understand intricate dynamics in the game of Go, showing an accuracy reaching 15% (baselined: .028%).",
      link: {
        label: "Go Bot",
        href: "https://github.com/bryan-ortiz0/go_bot",
      },
    },
    {
      title: "Examining Water Usage",
      techStack: ["Python", "Pandas", "K-Means Clustering", "DBSCAN", "Git"],
      description:
        "Using K-means clustering to group counties based on water use patterns showed big differences in how much water is used for things like watering crops, supplying homes, and mining across counties. The results indicate specific chances for counties to work together to use water better in raising animals, mining, and fish farming as well as hints that people with higher incomes may use more water.",
      link: {
        label: "Examing Water Usage ",
        href: "https://github.com/bryan-ortiz0/examining_water_usage",
      },
    },
    {
      title: "Subreddit NLP",
      techStack: ["Machine Learning", "Natural Language Processing", "Random Forest", "Naive Bayes"],
      description:
        "Designed and implemented models to categorize posts with 85-87% accuracy from online posts between two communities, showing potential to understand more about the groups through their language.",
      link: {
        label: "Subreddit NLP",
        href: "https://github.com/bryan-ortiz0/reddit_posts_ML",
      },
    },
    {
      title: "Hot Dog or Not Hot Dog Hackathon",
      techStack: ["Image Classification", "Hyperparameter Optimization", "Convolutional Neural Networks"],
      description:
        "Developed a custom image classification model for the 'Hot Dog or Not Hot Dog' hackathon, achieving 74% accuracy. Opted for an original model design instead of transfer learning, gaining insights into convolutional neural networks, data preprocessing, and hyperparameter optimization.",
      link: {
        label: "Hot Dog or Not Hot Dog Hackathon",
        href: "https://github.com/bryan-ortiz0/hotdog_or_not",
      },
    },
    {
      title: "Ames Housing Price Prediction",
      techStack: ["Python", "Supervised Machine Learning", "Ridge Regression"],
      description:
        "Employed linear regression techniques in Jupyter notebook to analyze Ames, Iowa housing data from CSV files, achieving an 89% accuracy in predicting sales prices for upcoming listings.",
      link: {
        label: "Ames Housing Price Prediction",
        href: "https://github.com/bryan-ortiz0/ames_housing_analysis",
      },
    },
    {
      title: "Census ACT / SAT Scores Exploratory Data Analysis",
      techStack: ["Utility Functions", "Pandas", "NumPy", "Matplotlib"],
      description:
        "Analyzed ACT/SAT scores from 2017-2019 to determine regional trends and inform educational resource allocation. After cleaning datasets, merging, and visualizing, insights revealed low academic performance in the Southern region compared to other regions, prompting urgent resource redistribution.",
      link: {
        label: "Census ACT / SAT Scores Exploratory Data Analysis",
        href: "https://github.com/bryan-ortiz0/statistical_test_analysis",
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

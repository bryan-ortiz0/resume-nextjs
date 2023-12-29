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
    "MySQL",
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
    "Excel"
  ],
  work: [
    {
      company: "DriveX Network",
      link: "https://www.linkedin.com/company/drive-x/",
      badges: ["Data Analytics"],
      title: "Teaching Assistant - University of The Bahamas",
      logo: "", // Add logo if available
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
      logo: "", // Add logo if available
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
      logo: "", // Add logo if available
      start: "Nov 2023",
      end: "Present",
      description:
        "Supported lead instructor for L'Oréal's Data Literacy Program for 200+ non-technical participants, tackling data democratization, data lifecycle stages such as ETL and data modeling, and data visualization tools like Tableau and PowerBI. Facilitated coordiation with L'Oréal's team, handled participant interactions via polls/trivia, and addressed questions, resulting in a flawless presentation by the lead instructor.",
    },
    {
      company: "Focus On Community Uplifting, Self-Esteem & Success (FOCUSS)",
      link: "https://www.facebook.com/FocussInc/",
      badges: ["Python Programming"],
      title: "Data Scientist",
      logo: "",
      start: "Oct 2023",
      end: "Present",
      description:
        "Directed Python coding curriculum development for a high school district, promoting learning via hands-on exercises and projects in Jupyter notebooks/VSCode, and establishing rapport with multilingual students using dual-language fluency.",
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

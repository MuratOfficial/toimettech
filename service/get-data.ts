export interface ProjectItem {
  projectId: string;
  category: string;
  label: string;
  description?: string;
  client?: string;
  technologies: string[];
  link?: string;
  images?: string[];
  bigFrame?: boolean;
}

export const projects: ProjectItem[] = [
  {
    projectId: "project9",
    category: "Web Development",
    label: "etazhi.kz",
    description: "...",
    technologies: ["NextJS", "MongoDB", "NodeJS"],
    client: "etazhi.kz",
    link: "https://etazhi.kz/",
    images: ["/projects/project9.PNG"],
  },
  {
    projectId: "project10",
    category: "Web Development",
    label: "Eco Market Burrata",
    description: "...",
    technologies: ["NextJS", "MongoDB", "NodeJS"],
    client: "Eco Market Burrata LLP",
    link: "https://www.ecomarketburrata.kz/",
    images: ["/projects/project11.PNG"],
  },
  {
    projectId: "project11",
    category: "Web Development",
    label: "Venprom",
    description: "...",
    technologies: ["NextJS", "MongoDB", "NodeJS"],
    client: "Venprom LLP",
    link: "https://www.venprom.kz/",
    images: ["/projects/project12.PNG"],
  },
  {
    projectId: "project12",
    category: "Web Development",
    label: "OneRoom",
    description: "...",
    technologies: ["NextJS", "MongoDB", "ShadcnUI"],
    client: "OneRoom Capital LLP",
    link: "https://oneroom.kz/",
    images: ["/projects/project10.PNG"],
  },
  {
    projectId: "project13",
    category: "Web Development",
    label: "Furnitura Lux",
    description: "...",
    technologies: ["NextJS", "MongoDB", "ShadcnUI"],
    client: "Abzhanova IE",
    link: "https://furnitura-lux-kamni.netlify.app/",
    images: ["/projects/project13.PNG"],
  },

  {
    projectId: "project1",
    category: "Web Development",
    label: "E-store DE'COLE",
    description:
      "E-store made in about 3 month. Store has 2 services: Admin dashboard and e-store itself. Admin dashboard has an API for communicate with store. Admin Dashboard made with Shadcn-UI. Database is on cloud PascaleDB (MySQL). For image store and edit used Cloudinary. Admin server can change background color, billboard, assets, products list, sizes, colors of assets in Store server. UPDATE: On Development, new requires",
    technologies: [
      "NextJS",
      "ShadcnUI",
      "Tailwind",
      "Typescript",
      "Prisma",
      "MySQL",
    ],
    client: "IP Symbat",
    link: "https://github.com/MuratOfficial/ecommerce-store",
    images: ["/projects/project1/1st.PNG"],
  },
  {
    projectId: "project2",
    category: "Web Development",
    label: "Headspace",
    description:
      "Our meditation website seamlessly merges React and Django, creating a harmonious user experience. React, a powerful JavaScript library, ensures a dynamic and responsive frontend interface, allowing users to navigate and interact effortlessly. Meanwhile, Django, a robust Python framework, efficiently handles the backend operations, enabling secure user authentication, data management, and smooth API integration. Together, they empower users to explore a curated collection of guided meditations, personalized to their preferences, fostering a tranquil and focused state of mind. The fusion of these technologies manifests a platform that seamlessly marries modern design with a serene user journey, facilitating a peaceful meditative practice for all.",
    technologies: ["ReactJS", "Redis", "SCSS", "Django", "PostgreSQL"],
    client: "Headspace Inc.",
    link: "https://headspace.com",
    images: ["/projects/project2/1st.PNG"],
  },
  {
    projectId: "project3",
    category: "CMS",
    label: "The Hub",
    description:
      "The development of a freelance photography website begins with leveraging Webflow's intuitive interface for creating a visually captivating frontend. Webflow allows for seamless design customization and layout structuring, ensuring an engaging presentation of the photographer's portfolio. Integrating PHP into the backend enables dynamic functionality, handling tasks like user authentication, data processing, and database management for efficient user interactions. PHP collaborates with a database system, such as MySQL, to organize and retrieve essential data, ensuring a smooth and responsive user experience. By combining Webflow's design prowess with PHP's backend capabilities, photographers can showcase their work effectively, attracting potential clients in the competitive freelance market.",
    technologies: ["Webflow", "CSS", "PHP", "MySQL"],
    client: "H Influencers",
    link: "https://thehub.com",
    images: ["/projects/project3/1st.PNG"],
  },
  {
    projectId: "project4",
    category: "CMS",
    label: "ano-identity",
    description:
      "Developing an e-consulting website involves a seamless integration of Tilda CMS, PHP, Figma, and LottieFiles. Tilda CMS provides a flexible platform for content creation and management, allowing easy customization of educational materials and modules. PHP is utilized for backend functionality, enabling interactive features such as user authentication, course progress tracking, and database management for student records. Figma, a robust design tool, aids in creating a visually appealing and intuitive user interface, ensuring an optimal learning experience. LottieFiles integration enhances the website with captivating animations, making the e-learning platform engaging and dynamic for students and educators alike.",
    technologies: ["Tilda", "CSS", "Figma", "LottieFiles", "PHP", "MySQL"],
    client: "TOO AD",
    link: "https://ano-identity.ru/",
    images: ["/projects/project4/1st.PNG"],
  },
  {
    projectId: "project5",
    category: "Web Development",
    label: "Oasis Living",
    description:
      "The development of a marketing website involves the powerful integration of Django, Django REST Framework (DRF), PostgreSQL, and ReactJS. Django serves as the foundation, providing a robust backend framework that facilitates efficient data management, user authentication, and overall website structure. DRF complements Django by enabling the creation of a comprehensive and secure API, allowing seamless communication between the backend and the frontend. PostgreSQL, a powerful open-source relational database, is employed for efficient data storage, retrieval, and management, ensuring scalability and performance. ReactJS, a versatile JavaScript library, forms the frontend, enabling the creation of a dynamic and interactive user interface, optimizing the user experience and engagement on the marketing website.",
    technologies: ["React", "Tailwind", "Django", "DRF", "PostgreSQL"],
    client: "OasisLiving Ltd.",
    link: "https://oasis-living.com/",
    images: ["/projects/project5/1st.PNG"],
  },
  {
    projectId: "project6",
    category: "CMS",
    label: "Razumno",
    description:
      "The development of a marketing website involves the powerful integration of Django, Django REST Framework (DRF), PostgreSQL, and ReactJS. Django serves as the foundation, providing a robust backend framework that facilitates efficient data management, user authentication, and overall website structure. DRF complements Django by enabling the creation of a comprehensive and secure API, allowing seamless communication between the backend and the frontend. PostgreSQL, a powerful open-source relational database, is employed for efficient data storage, retrieval, and management, ensuring scalability and performance. ReactJS, a versatile JavaScript library, forms the frontend, enabling the creation of a dynamic and interactive user interface, optimizing the user experience and engagement on the marketing website.",
    technologies: ["Tilda", "CMS"],
    client: "OasisLiving Ltd.",
    link: "https://rzmn.ru/",
    images: ["/projects/project6/1.PNG"],
  },
  {
    projectId: "project7",
    category: "CMS",
    label: "Numa Creative",
    description:
      "The development of a marketing website involves the powerful integration of Django, Django REST Framework (DRF), PostgreSQL, and ReactJS. Django serves as the foundation, providing a robust backend framework that facilitates efficient data management, user authentication, and overall website structure. DRF complements Django by enabling the creation of a comprehensive and secure API, allowing seamless communication between the backend and the frontend. PostgreSQL, a powerful open-source relational database, is employed for efficient data storage, retrieval, and management, ensuring scalability and performance. ReactJS, a versatile JavaScript library, forms the frontend, enabling the creation of a dynamic and interactive user interface, optimizing the user experience and engagement on the marketing website.",
    technologies: ["Tilda", "CMS"],
    client: "Numa Creative",
    link: "https://numacreative.de/",
    images: ["/projects/project7/1.PNG"],
  },
  {
    projectId: "project8",
    category: "Promo",
    label: "F61 Agency",
    description:
      "The development of a marketing website involves the powerful integration of Django, Django REST Framework (DRF), PostgreSQL, and ReactJS. Django serves as the foundation, providing a robust backend framework that facilitates efficient data management, user authentication, and overall website structure. DRF complements Django by enabling the creation of a comprehensive and secure API, allowing seamless communication between the backend and the frontend. PostgreSQL, a powerful open-source relational database, is employed for efficient data storage, retrieval, and management, ensuring scalability and performance. ReactJS, a versatile JavaScript library, forms the frontend, enabling the creation of a dynamic and interactive user interface, optimizing the user experience and engagement on the marketing website.",
    technologies: ["Tilda", "CMS"],
    client: "F61 Agency",
    link: "https://f61agency.com/",
    images: ["/projects/project8/1.PNG"],
  },
];

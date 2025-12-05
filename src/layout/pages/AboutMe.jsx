import React from "react";
import { Container, Typography, Avatar, Box, Divider } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ my: 4 }} id="about">
      <Typography variant="h4" align="center" gutterBottom>
        About Me
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        {/* Avatar */}

        <Avatar
          src={
            "https://zaidansari42.netlify.app/assets/images/Avatar-Image.jpg"
          }
          alt="Zaid Ansari"
          sx={{ width: { xs: 180, sm: 220, lg: 300 }, height: "auto" }}
          variant="rounded"
        />

        {/* Description */}

        <Box mb={2}>
          <Typography variant="body1" paragraph>
            My name is{" "}
            <Box component="span" fontWeight="600">
              Zaid Ansari
            </Box>{" "}
            and I am a front end developer. I have a passion for creating
            intuitive and visually appealing user interfaces using{" "}
            <Box component="span" fontWeight="600">
              HTML
            </Box>
            ,{" "}
            <Box component="span" fontWeight="600">
              CSS
            </Box>
            , and{" "}
            <Box component="span" fontWeight="600">
              JavaScript
            </Box>
            . I am also proficient in the popular front end framework called{" "}
            <Box component="span" fontWeight="600">
              React
            </Box>
            . I have worked on a variety of web applications and I am excited
            about the opportunity to bring my skills and expertise to your team
            and help create innovative and engaging web applications.
          </Typography>
          <Typography variant="body1">
            React Developer with 3 years of experience in service and product
            companies. Skilled in JavaScript, TypeScript, and building modern
            Frontend solutions. Delivered analytics and performance-driven
            features across multiple platforms
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />

      {/* Work Experience Section */}
      <Typography variant="h5" gutterBottom>
        Work Experience
      </Typography>

      {/* Frontend Web Developer at Mirraw */}
      <Box mb={3}>
        <Typography variant="h6">
          Frontend Web Developer,{" "}
          <Box component="span" fontWeight="600">
            Mirraw
          </Box>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Full-time | Jan 2025 to Present (1 year) | 1 Month Notice Period
        </Typography>
        <Typography variant="body2" paragraph>
          Currently working as a Frontend Developer at Mirraw.com, a leading
          e-commerce platform specialising in ethnic fashion. I am responsible
          for building and maintaining user-centric web interfaces that ensure
          seamless and responsive shopping experiences. My role involves close
          collaboration with cross-functional teams, including UI/UX designers,
          backend developers, and product managers, to deliver high-performance
          and scalable web solutions.
        </Typography>
        <Typography variant="body2" paragraph>
          Key Responsibilities:
          <ul>
            <li>
              Develop responsive, cross-browser compatible interfaces using
              HTML5, CSS3, JavaScript, and React.js
            </li>
            <li>
              Work closely with design teams to implement pixel-perfect UI
              aligned with brand guidelines and usability principles
            </li>
            <li>
              Integrate RESTful APIs and coordinate with backend services for
              dynamic data rendering
            </li>
            <li>
              Optimize website performance for speed, SEO, and user experience
              using modern tooling and best practices
            </li>
            <li>
              Participate in code reviews, maintain reusable code libraries, and
              ensure adherence to frontend development standards
            </li>
            <li>
              Use Git for version control and contribute to agile workflows
              through sprint planning and daily stand-ups
            </li>
          </ul>
        </Typography>
        <Typography variant="body2">
          Tech Stack: JavaScript, React.js, HTML5, CSS3, Sass/SCSS, Git, REST
          APIs, Webpack, NPM, Chrome DevTools, Figma
        </Typography>
      </Box>

      {/* Software Development Engineer at Nonstop IO */}
      <Box mb={3}>
        <Typography variant="h6">
          Software Development Engineer,{" "}
          <Box component="span" fontWeight="600">
            Nonstop IO Technologies
          </Box>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Full-time | Jan 2023 to Dec 2024 (2 years)
        </Typography>
        <Typography variant="body2" paragraph>
          Key Contributions:
          <ul>
            <li>
              Conceptualized and optimized employee management dashboards,
              reducing manual workload by 30% and improving user engagement
            </li>
            <li>
              Restructured a recruiting portal powered by AI, improving code
              performance, reducing API latency by 25%, and increasing
              modularity
            </li>
            <li>
              Raised Chrome Lighthouse scores for React landing pages from 55 to
              90+ by optimizing SEO, accessibility, and mobile responsiveness
            </li>
            <li>
              Debugged and streamlined application performance by chunking and
              lazy loading, reducing time-to-load by 30%
            </li>
            <li>
              Collaborated with a team of React experts to architect and develop
              India's first super app with over 120 million users
            </li>
            <li>
              Integrated various Learning Management Systems (Moodle,
              Blackboard, Canvas) for seamless ecosystem functionality
            </li>
            <li>
              Increased test coverage by 40% through Test-Driven Development
              (TDD) using Vitest for faster testing
            </li>
            <li>
              Proposed UX improvements covering edge cases, refining the
              interface for a more intuitive experience
            </li>
            <li>
              Coached junior developers, fostering collaborative learning and
              knowledge sharing
            </li>
          </ul>
        </Typography>
        <Typography variant="body2">
          Tech Stack: React.js, JavaScript, HTML5, CSS3, Redux, Git, REST APIs,
          Jest/Vitest, Material UI, Webpack, Figma
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

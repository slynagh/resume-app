import { Typography, Divider, Link, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chip: { margin: theme.spacing(0.5) },
  divider: { marginBottom: theme.spacing(2) },
}));

const Experience = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" component="h3" gutterBottom>
        <strong>UX Engineer</strong> | Mendix | 2020-2024
      </Typography>
      <p>
        Mendix is a Siemens company and the world’s leading Enterprise Low-Code
        Application Development Platform. As UX Engineer within the Community
        and Collaboration unit, I rose from a mid-level through senior to lead
        UX engineer while working closely with designers and software engineers
        to implement a consistent look and feel across the multitude of web apps
        which comprise the Mendix Developer Portal. Some examples include:
      </p>
      <ul>
        <li>
          <Link
            href="https://community.mendix.com/p/community"
            target="_blank"
            rel="noreferrer"
          >
            Mendix Community
          </Link>
        </li>
        <li>
          <Link
            href="https://academy.mendix.com/link/home"
            target="_blank"
            rel="noreferrer"
          >
            Mendix Academy
          </Link>
        </li>
        <li>
          <Link
            href="https://marketplace.mendix.com/"
            target="_blank"
            rel="noreferrer"
          >
            Mendix Marketplace
          </Link>
        </li>
      </ul>
      <Typography variant="h5" component="h4" gutterBottom>
        Platform Design System
      </Typography>
      <p>
        My main role was working alongside a dedicated Designer to create dozens
        of well-documented CSS components, accessible React custom widgets,
        responsive Mendix layouts and page templates. The Platform Design System
        included a custom Figma plugin, automated release publishing via Gitlab
        CI/CD and Mendix Marketplace API integration. Adoption of the published
        PDS module became mandatory across the developer portal, leading to
        greatly reduced duplication, and a unified user experience. I conducted
        code reviews of others' contributions and provided support and guidance.
      </p>
      <Typography variant="h5" component="h4" gutterBottom>
        Mendix Dark Mode
      </Typography>
      <p>
        I played a central role in developing the Mendix dark mode and theming
        system, gathering requirements and workshopping solutions with a team of
        product designers to simplify the existing prototype implementation and
        translate it into SCSS for use in the design system. Dark mode went GA
        on June 28, 2023 across the entire platform.
      </p>

      <Typography variant="h5" component="h4" gutterBottom>
        Mendix Sign-On Pages
      </Typography>

      <p>
        In collaboration with Mendix Identity Services and a lead accessibility
        engineer, I updated all Mendix Sign-On pages and related user flows,
        working in HTML, CSS, and converting all jQuery to modern JavaScript.{" "}
      </p>
      <Typography variant="h5" component="h4" gutterBottom>
        Workshops and Meetups
      </Typography>

      <p>
        I co-hosted Meetup “How Mendix Manages a Multi-App Landscape at Scale”,
        aimed at Mendix customers and partners and attended by more than 80
        people. I co-hosted a series of online workshops aimed at Mendix
        developers on HTML and CSS fundamentals, and how to work with the Design
        System.
      </p>

      <p>
        <i>Technologies used:</i>
        {[
          "HTML5",
          "SCSS",
          "JavaScript",
          "Typescript",
          "React",
          "Figma",
          "Mendix Studio Pro",
          "Git",
          "Gitlab",
          "Mendix Platform and Model SDKs",
          "APIs",
        ].map((item) => (
          <Chip key={item} label={item} className={classes.chip} />
        ))}
      </p>

      <Divider className={classes.divider} />

      <Typography variant="h4" component="h3" gutterBottom>
        <strong>Web Publisher</strong> | ACRRM | 2014-2019
      </Typography>

      <p>
        I was part of Australian College of Rural and Remote Medicine’s Digital
        Solutions team.
      </p>
      <p> Achievements include: </p>

      <ul>
        <li>
          Technical implementation of dozens of online learning courses within
          Learning Management Systems.
        </li>
        <li>Website development, analytics, CMS content publishing. </li>
        <li>
          App design, development, and release management for Google Play and
          App Store.{" "}
        </li>
        <li>
          Other responsibilities include process documentation, multimedia
          design and development, video editing, digital platform evaluation.{" "}
        </li>
      </ul>

      <p>
        <i>Technologies used:</i>
        {[
          "HTML5",
          "CSS",
          "JavaScript",
          "jQuery",
          "Bootstrap",
          "Canvas LMS",
          "Sitefinity CMS",

          "Photoshop",
          "Google Analytics",
          "ActionScript",
          "Adobe AIR",
        ].map((item) => (
          <Chip key={item} label={item} className={classes.chip} />
        ))}
      </p>

      <Divider className={classes.divider} />
      <Typography variant="h4" component="h3" gutterBottom>
        <strong>Digital Designer</strong> | STEVENLYNAGH.COM | 2006-2014{" "}
      </Typography>

      <p>
        Freelance illustration, animation, design, video editing, and website
        development.{" "}
      </p>

      <p>
        <i>Technologies used:</i>
        {[
          "Photoshop",
          "Illustrator",
          "Premiere",
          "After Effects",
          "Animate",
          "Flash",
          "Pencil and Paper",
        ].map((item) => (
          <Chip key={item} label={item} className={classes.chip} />
        ))}
      </p>
      <Divider className={classes.divider} />

      <Typography variant="h4" component="h3" gutterBottom>
        <strong>Animator</strong> | OSKA Software | 2001-2003
      </Typography>

      <p>
        Traditional 2D pencil and paper animation for PC desktop characters and
        e-cards.
      </p>
    </>
  );
};

export default Experience;

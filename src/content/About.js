import { Typography, Link } from "@material-ui/core";

const About = () => {
  return (
    <>
      <Typography variant="body1" component="p" gutterBottom>
        This is app was created with{" "}
        <Link
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noreferrer"
        >
          Create React App
        </Link>
        .
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        It uses{" "}
        <Link href="https://v4.mui.com/" target="_blank" rel="noreferrer">
          Material UI v4
        </Link>{" "}
        components and Icons.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Additional Icons are courtesy of{" "}
        <Link href="https://icomoon.io/" target="_blank" rel="noreferrer">
          Icomoon
        </Link>
        .
      </Typography>
    </>
  );
};
export default About;

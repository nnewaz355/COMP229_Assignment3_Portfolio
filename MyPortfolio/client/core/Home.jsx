import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import portraitImg from "./../src/assets/portrait_nevan.jpg";

const Home = () => {
    const theme = useTheme();

    return (
        <Card
            className="hero-content"
            sx={{
                maxWidth: 600,
                margin: "auto",
                mt: 5,
            }}
        >
            <Typography
                variant="h6"
                component="h1"
                sx={{
                    px: 2.5,
                    pt: 3,
                    pb: 2,
                    color: theme.custom?.openTitle || theme.palette.primary.main,
                }}
            >
                Welcome to Nevan Newaz's Portfolio!
            </Typography>
            <CardMedia
                sx={{ minHeight: 300 }}
                image={portraitImg}
                title="Nevan Newaz"
            />
            <CardContent>
                <Typography
                    className="hero-target-role"
                    variant="subtitle1"
                    component="p"
                >
                    Junior Software Developer
                </Typography>
                <div className="mission-statement">
                    <Typography variant="h6" component="h2">
                        Mission Statement
                    </Typography>
                    <Typography variant="body2" component="p">
                        To engineer robust, maintainable, and user-centric software
                        solutions by adhering to proven design principles and
                        adaptive full-stack architectures.
                    </Typography>
                </div>
                <div className="hero-actions">
                    <Typography variant="h6" component="h2">
                        What To Do Next:
                    </Typography>
                    <Link to="/about" className="btn btn-primary">
                        Learn More About Me
                    </Link>
                    <br />
                    <Link to="/education" className="btn btn-secondary">
                        My Education
                    </Link>
                    <br />
                    <Link to="/project" className="btn btn-secondary">
                        View Featured Projects
                    </Link>
                    <br />
                    <Link to="/service" className="btn btn-secondary">
                        My Skills
                    </Link>
                    <br />
                    <Link to="/contact" className="btn btn-secondary">
                        Contact Me
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default Home;

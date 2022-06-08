import { Box, Card, CardMedia, Typography, CardContent, CardActions, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";
import anime from "../assets/png/anime.png"



function AnimeCard({ originalName, englishName, favorites, setFavorites, id }) {

    const [fav, setFav] = useState(false);
    return (
        <Card sx={{ width: "373px", backgroundColor: "white", height: "270px" }}>

            <Box
                component="img"
                sx={{ height: "150px", width: "373px" }}
                src={anime}
                alt="anime"
            />
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    p: "10px",
                    marginBottom: "auto"
                }}>
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontFamily: "Noto Serif JP",
                        fontWeight: "700"
                    }}>
                    {englishName}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontFamily: "Noto Serif JP",
                        fontWeight: "700"
                    }}>
                    {originalName}
                </Typography>

            </CardContent>
            <CardActions
                disableSpacing
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "auto",
                    position: "sticky"
                }}>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => {
                        if (favorites?.some((i) => i === id)) {
                            setFavorites((prev) => { return prev.filter(i => i !== id) })
                        } else { setFavorites((prev) => { return [...prev, id] }) }
                    }}>
                    <FavoriteIcon sx={[favorites?.some((i) => i === id) ? { color: "red" } : { color: "grey" }]} />
                </IconButton>

            </CardActions>

        </Card >
    );
}

export default AnimeCard;
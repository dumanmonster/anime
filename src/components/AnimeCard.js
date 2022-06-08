import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, IconButton, Typography } from "@mui/material";
import anime from "../assets/png/anime.png";



function AnimeCard({ item, favorites, setFavorites }) {

    return (
        <Box sx={{ width: "373px", backgroundColor: "white", height: "270px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

            <Box
                component="img"
                sx={{ height: "150px", width: "373px" }}
                src={anime}
                alt="anime"
            />
            <Box
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
                    {item?.title?.english}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontFamily: "Noto Serif JP",
                        fontWeight: "700"
                    }}>
                    {item?.title?.native}
                </Typography>

            </Box>
            <Box
                disableSpacing
                sx={{
                    display: "flex",
                    justifyContent: "end",


                }}>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => {
                        if (favorites?.some((i) => i.id === item.id)) {
                            setFavorites((prev) => { return prev.filter(i => i.id !== item.id) })
                        } else { setFavorites((prev) => { return [...prev, item] }) }
                    }}>
                    <FavoriteIcon sx={[favorites?.some((i) => i.id === item.id) ? { color: "red" } : { color: "grey" }]} />
                </IconButton>

            </Box>

        </Box >
    );
}

export default AnimeCard;
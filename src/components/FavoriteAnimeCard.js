import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import favAnime from "../assets/png/favAnime.png";


function FavoriteAnimeCard({ setFavorites, remove, item }) {


    return (
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>

            <Box
                component="img"
                sx={{ height: "100%", width: "117px", objectFit: "cover" }}
                src={item?.coverImage?.medium}
                alt="favAnime"
            />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1, ml: 1 }}>

                <Typography sx={{ fontSize: "16px", fontFamily: "Noto Serif JP", fontWeight: "700" }}>
                    {item?.title?.native || item?.title?.english}
                </Typography>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", marginTop: "auto" }}>
                <IconButton aria-label="add to favorites" onClick={() => setFavorites((prev) => prev?.filter(i => i.id !== item.id))}>
                    <CloseIcon />
                </IconButton>

            </Box>

        </ Box >
    );
}

export default FavoriteAnimeCard;
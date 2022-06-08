import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import favAnime from "../assets/png/favAnime.png";


function FavoriteAnimeCard({ id, originalName, remove }) {


    return (
        <Box
            sx={{

                width: "361px",
                backgroundColor: "white",
                height: "217px",
                display: "flex",

            }}>

            <Box
                component="img"
                sx={{ height: "217px", width: "117px" }}
                src={favAnime}
                alt="favAnime"
            />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>

                <Typography sx={{ fontSize: "16px", fontFamily: "Noto Serif JP", fontWeight: "700" }}>
                    {originalName}
                </Typography>

            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", marginTop: "auto" }}>
                <IconButton aria-label="add to favorites" onClick={() => remove(id)}>
                    <CloseIcon />
                </IconButton>

            </Box>

        </Box>
    );
}

export default FavoriteAnimeCard;
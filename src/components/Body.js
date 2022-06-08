import { useLazyQuery } from '@apollo/client';
import { Box, Button, Grid, InputBase, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_ANIME_QUERY } from '../graphql/Queries';
import AnimeCard from "./AnimeCard";
import FavoriteAnimeCard from './FavoriteAnimeCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Body() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [getAnime, { loading, data, error }] = useLazyQuery(GET_ANIME_QUERY, {
        variables: { search: search, page: page, perPage: 6 }
    })


    useEffect(() => {
        getAnime();
        if (data) {
            console.log(data)
        }
        if (error) {
            console.log(error);
        }
    }, [search])

    const remove = (id) => {
        setFavorites((prev) => {
            return prev.filter((e) => e !== id)
        })
    }
    return (

        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
            <Typography
                sx={{
                    fontFamily: "Noto Serif JP",
                    color: "#00CC99",
                    fontWeight: "700",
                    fontSize: "34px",
                    py: "10px",
                    maxWidth: "250px"
                }}
            >
                Список аниме
            </Typography>

            <InputBase
                fullWidth
                onChange={(event) => { setSearch(event.target.value) }}
                placeholder="Text here"
                sx={{
                    mx: 4,
                    width: "70%",
                    borderRadius: "5px",
                    height: "50px",
                    backgroundColor: "white",
                    mb: 4,
                    ":placeholder": {
                        fontSize: "16px",
                        color: "#D9D9D9",
                        pl: 1
                    },
                    input: {
                        pl: 1,
                        fontSize: "16px",
                        color: "black",
                        fontFamily: "Noto Serif JP",
                        fontWeight: "400"
                    }
                }}
            />


            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mt: 4 }}>
                {data?.Page?.media?.length > 0 &&
                    <Grid

                        container

                        sx={{ display: "flex", justifyContent: "center" }}
                        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}

                        rows={{ xs: 6, sm: 6, md: 3, lg: 3 }}
                    >
                        {data?.Page?.media && data?.Page?.media?.map((item) => (
                            <Grid
                                sx={{ my: 4, mx: 1 }}
                                xs={12}
                                sm={12}
                                md={4}
                                lg={4}
                                key={item.id}
                            >
                                <AnimeCard key={item.id} item={item} favorites={favorites} setFavorites={setFavorites} />
                            </Grid>
                        ))}
                    </Grid>

                }

            </Box>
            {
                data?.Page?.media?.length > 0 &&
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <ArrowBackIcon sx={{ color: "#00CC99", mr: 3 }} onClick={() => setPage(page - 1)} />
                    <Button
                        disabled={!data?.Page?.pageInfo?.hasNextPage}
                        sx={{
                            fontSize: "16px",
                            fontFamily: "Noto Serif JP",
                            fontWeight: "700",
                            color: "#333333",
                            backgroundColor: "#00CC99",
                            width: "159px",
                            height: "50px",
                            borderRadius: "5px",
                            mt: 1,
                            ":hover": {
                                color: "#333333",
                                backgroundColor: "#00CC99",
                            }
                        }}
                        onClick={() => setPage(page + 1)}
                    >
                        More
                    </Button>

                </Box>
            }
            {
                favorites.length !== 0 &&


                <Typography
                    sx={{
                        fontFamily: "Noto Serif JP",
                        color: "#00CC99",
                        fontWeight: "700",
                        fontSize: "34px",


                    }}
                >
                    Любимые аниме
                </Typography>
            }
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", mb: 4 }}>
                {favorites.length !== 0 &&
                    <Grid
                        container
                        sx={{ display: "flex", justifyContent: "center" }}
                        columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}

                        rows={{ xs: 4, sm: 4, md: 3, lg: 3 }}
                    >
                        {favorites.map((item) => (
                            <Grid xs={6} sm={6} md={4} lg={4} key={item.id} sx={{ my: 4, mx: 1 }} >
                                <FavoriteAnimeCard key={item.id} setFavorites={setFavorites} item={item} />
                            </Grid>
                        ))}
                    </Grid>}

            </Box>




        </Box >
    );
}

export default Body;
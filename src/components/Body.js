import { useLazyQuery } from '@apollo/client';
import { Box, Button, Grid, InputBase, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_ANIME_QUERY } from '../graphql/Queries';
import AnimeCard from "./AnimeCard";
import FavoriteAnimeCard from './FavoriteAnimeCard';
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
                    pt: "10px",
                    maxWidth: "250px"
                }}
            >
                Список аниме
            </Typography>

            <InputBase
                onChange={(event) => { setSearch(event.target.value) }}
                placeholder="Text here"
                sx={{
                    width: "600px",
                    borderRadius: "5px",
                    height: "50px",
                    backgroundColor: "white",
                    mt: 2,
                    mb: 2,
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
            <Box sx={{ maxWidth: "1079px", maxHeight: "633px" }}>
                {data?.Page?.media?.length > 0 &&
                    <Grid container columnSpacing={{ xs: "35px", md: "35px" }} rowSpacing={{ xs: "15px", md: "15px" }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        {data?.Page?.media && data?.Page?.media?.map((item) => (
                            <Grid item xs={1} sm={4} md={4} key={item.id} >
                                <AnimeCard key={item.id} item={item} favorites={favorites} setFavorites={setFavorites} />
                            </Grid>
                        ))}
                    </Grid>

                }

            </Box>
            {data?.Page?.media?.length > 0 &&
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
                </Button>}
            {favorites.length !== 0 &&
                <>
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
                    <Box sx={{ maxWidth: "1079px", maxHeight: "633px" }}>
                        <Grid container columnSpacing={{ xs: "35px", md: "35px" }} rowSpacing={{ xs: "15px", md: "15px" }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            {favorites.map((item) => (
                                <Grid item xs={1} sm={4} md={4} key={item.id} >
                                    <FavoriteAnimeCard key={item.id} id={item.id} originalName={item?.title?.native} remove={remove} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                </>



            }




        </Box>
    );
}

export default Body;
import noPoster from "../assets/no-poster.png";
import { IMAGE_BASE_URL } from "../Services/tmdb";

export const getPosterUrl = (posterPath) => {
    if (!posterPath) {
        return noPoster;
    }
    return `${IMAGE_BASE_URL}${posterPath}`;
};

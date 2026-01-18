import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    Nav,
    Logo,
    NavLinks,
    StyledLink,
    SearchForm,
    SearchInput,
    SearchButton,
    ErrorText,
} from "../Styles";



const Navbar = () => {
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!query.trim()) {
            setError("Please enter a movie name");
            return;
        }

        setError(""); 
        navigate(`/search?query=${query}`);
        setQuery("");
    };


    return (
        <Nav>
            <Logo to="/">🎬 MovieHub</Logo>

            <NavLinks>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </NavLinks>

            <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
            {error && <ErrorText>{error}</ErrorText>}
        </Nav>
    );
};

export default Navbar;

import { useEffect, useState } from "react";
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

const Popular = () => {
    const [popular,setpopular] = useState([]);
    // console.log(popular);

    useEffect(() => {
        getPopluar();
    },[]);

    const getPopluar = async () =>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        setpopular(data.recipes);
        
    }

  return (
    <Wrapper>
        <h3>POPULAR PICKS</h3>
        <Splide options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag: 'free',
            gap: '5rem'
        }}>
            {popular.map(recipe => {
                return (
                    <SplideSlide key={recipe.id}>
                        <Card>
                            <p>{recipe.title}</p>
                            <img src= {recipe.image} alt={recipe.title}/>
                        </Card>
                    </SplideSlide>
                )
            })}
        </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin : 4rem 0rem;
`;

const Card = styled.div`
min-height:25rem;
border-radius:2rem;
overflow:hidden;
position:relative;

img{
    border-radius:2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;


export default Popular
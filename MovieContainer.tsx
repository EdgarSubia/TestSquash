import React from 'react';
import {WraperMovieContainer} from './WrapperMovieContainer.styled'

interface IGenre {
  id:string;
  name:string;
}

type IMovieContainerProps = {
  original_title:string;
  genres:IGenre[];
  overview:string;
  vote_average:number;
}

export const MovieContainer: React.FunctionComponent<IMovieContainerProps> = (props) => {
  return(
    <WraperMovieContainer>
      <div>
        <h3>{props.original_title}</h3>
        <div>{props.genres.map(genre=> {return `${genre.name} `})}</div>
        <div>{props.overview}</div>
        <div>{props.vote_average}</div>
      </div>
    </WraperMovieContainer>
  )
};
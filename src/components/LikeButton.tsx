import React from 'react';
import {Like as LikeModel} from 'types';
import {Box} from './Box';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import styled from "styled-components";

interface LikeButtonProps {
    like: LikeModel;
}

const heartColor = '#FF0000'

const LikeButton: React.FC<LikeButtonProps> = ({like}) => {

    const [postLiked, likeButtonClicked] = React.useState(like.liked);

    const handleLikeClick = () => {
        likeButtonClicked((prevState => !prevState));
    }

    return (
        <Box mBottom='xs'>
            <ButtonContainer onClick={handleLikeClick}>
                {
                    postLiked ?
                        <FaHeart style={{fill: heartColor}}/>
                        : <FaRegHeart/>
                }
            </ButtonContainer>
        </Box>
    )
};

export default LikeButton;

const ButtonContainer = styled.div`
  width: max-content;   
  cursor: pointer;
`

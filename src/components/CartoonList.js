import React, { useEffect } from "react";
import styled from "styled-components";
import { useCartoonStore } from "../modules/cartoon-store";
import { AiFillHeart } from "react-icons/ai";

function CartoonList() {
  const {
    cartoons,
    likedCartoons,
    getAll: getAllCartoons,
    like: likeCartoon,
  } = useCartoonStore((state) => state);

  useEffect(() => {
    getAllCartoons();
  }, []);

  return (
    <CartoonsWrap>
      <h2>Zustand Cartoons</h2>
      <CartoonListWrap>
        {cartoons?.map((cartoon) => {
          const isLiked = likedCartoons.includes(cartoon?.id);
          return (
            <CartoonItem key={cartoon?.id}>
              <LikeBtn
                size={25}
                isLiked={isLiked}
                onClick={() => likeCartoon(cartoon?.id)}
              />
              <CartoonImg src={cartoon?.image} alt={cartoon.title} />
              <CartoonContentsBox>
                <CartoonTitle>
                  {cartoon?.title}({cartoon?.year})
                </CartoonTitle>
                <span>by {cartoon.creator}</span>
                <span>{cartoon.runtime_in_minutes} min</span>
                <span>{cartoon.episodes} episodes</span>
              </CartoonContentsBox>
            </CartoonItem>
          );
        })}
      </CartoonListWrap>
    </CartoonsWrap>
  );
}

export default CartoonList;

const CartoonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;
`;

const CartoonListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CartoonItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 4px;
  font-size: 12px;
`;

const CartoonTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const CartoonImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 8px;
  border-radius: 12px; ;
`;

const CartoonContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const LikeBtn = styled(AiFillHeart)`
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
  color: ${({ isLiked }) => (isLiked ? "red" : "black")};
`;

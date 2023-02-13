import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getHotCoffees } from "../lib/api";

function CoffeeList() {
  const coffees = useSelector((state) => state.coffee.coffees);
  const dispatch = useDispatch();

  const getCoffees = useCallback(() => {
    dispatch(getHotCoffees());
  }, [dispatch]);

  useEffect(() => {
    getCoffees();
  }, []);

  return (
    <ListWrap>
      <h2>Redux Coffee</h2>
      {coffees?.map((coffee) => {
        return (
          <CoffeeItem key={coffee.id}>
            <CoffeeImg src={coffee.image} />
            <CoffeeTextBox>
              <Title>{coffee.title}</Title>
              <p>{coffee.description}</p>
            </CoffeeTextBox>
          </CoffeeItem>
        );
      })}
    </ListWrap>
  );
}

export default CoffeeList;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: auto;
`;

const CoffeeItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const CoffeeImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
const CoffeeTextBox = styled.div`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  max-width: 300px; ;
`;

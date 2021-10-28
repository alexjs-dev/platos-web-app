import React from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-content: center;
  align-items: center;
  /* center items */
  justify-items: center;
  grid-gap: 16px;
  width: 100%;
`;

const CategoryCard = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  transform: ${(props) => (props.active ? 'scale(1.1)' : 'scale(1)')};
  svg {
    width: 80px;
    height: 80px;
    transition: all 0.2s ease-in-out;
    color: ${(props) => (props.active ? '#fff' : '#000')};
    &:hover {
      color: #fff !important;
      fill: #fff !important;
    }
  }
`;

const Categories = ({ categories, activeCategory, onClick }) => {
  if (!categories) {
    return null;
  }
  return (
    <>
      <br />
      <h1>Categories</h1>
      <CategoriesWrapper>
        {categories.map((category) => {
          const active = activeCategory === category.id;
          const Icon = category.icon;
          return (
            <CategoryCard
              key={category.id}
              onClick={() => onClick && onClick(category)}
              active={active}
            >
              <Icon />
            </CategoryCard>
          );
        })}
      </CategoriesWrapper>
      <br />
    </>
  );
};

export default Categories;

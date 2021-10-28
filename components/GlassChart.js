import React from 'react';
import styled from 'styled-components';
import Chart from 'react-apexcharts';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;

  span {
    font-size: 16px !important;
    color: #352b73 !important;
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const defaultSeries = [50, 10, 5, 5, 30];

const GlassChart = (props) => {
  if (!process.browser) {
    return null;
  }
  const isMobile = window.innerWidth < 768;

  const defaultOptions = {
    chart: {
      id: 'apexchart-example',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    labels: ['Programming', 'Accounting', 'Management', 'People', 'Other'],
    legend: {
      position: isMobile ? 'bottom' : 'right',
    },
  };

  return (
    <Wrapper>
      <Chart
        options={props.options || defaultOptions}
        series={props.series || defaultSeries}
        type="donut"
        width={isMobile ? Math.floor(window.innerWidth / 1.3) : 500}
        height={320}
        {...props}
      />
    </Wrapper>
  );
};

export default GlassChart;

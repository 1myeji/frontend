import DonutChart from 'react-donut-chart';
import styled from 'styled-components';

const UserSector = () => {
  const colors = ['#FFC847', '#4357AC ', '#8294CD', '#7B7B7B'];
  const data = [
    {
      label: 'Give you up',
      value: 25,
    },
    {
      label: 'ddnp',
      value: 15,
    },
    {
      label: 'ddnp',
      value: 5,
    },
    {
      label: 'ddnp',
      value: 9,
    },
  ];

  return (
    <Column>
      <h5>지원자 직무</h5>
      <div className='container'>
        <DonutChart
          className='chart'
          data={data}
          width={300}
          height={400}
          innerRadius={0.4}
          strokeColor={'none'}
          selectedOffset={0}
          interactive={false}
          colors={colors}
        />

        <div className='tags'>
          <div className='tag'>
            <p className='color' />
            <p>{'의사'}</p>
            <div>31.55%</div>
          </div>
          <div className='tag'>
            <p className='color' />
            <p>{'의사'}</p>
            <div>31.55%</div>
          </div>
          <div className='tag'>
            <p className='color' />
            <p>{'의사'}</p>
            <div>31.55%</div>
          </div>
          <div className='tag'>
            <p className='color' />
            <p>{'의사'}</p>
            <div>31.55%</div>
          </div>
        </div>
      </div>
    </Column>
  );
};

export default UserSector;

const Column = styled.div`
  width: 836px;
  height: 309px;
  box-shadow: 0px 0px 20px rgba(67, 87, 172, 0.19);
  border-radius: 20px;
  padding: 20px 30px;
  position: relative;
  h5 {
    color: #374151;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  .container {
    padding-left: 10px;
    display: flex;
    position: relative;
    height: 100px;
  }

  .chart-innertext {
    display: none;
  }
  .chart-legend-item {
    display: none;
  }
  .tags {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    top: 35%;
    right: 70px;
    height: 100px;
    width: 100px;
    .tag {
      display: flex;
      align-items: center;
      gap: 11px;
      height: 15px;
      font-size: 15px;

      .color {
        width: 14px;
        height: 14px;
        background-color: #ffc847;
        border-radius: 100%;
      }
      div {
        position: absolute;
        left: 100px;
      }
    }
  }
`;
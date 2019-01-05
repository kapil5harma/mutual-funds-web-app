import React from 'react';

const ComparisonTable = props => {
  console.log('props: ', props);
  const { fund1, fund2, fund3, fund4 } = props;
  let count = 0;
  if (fund1 !== null) count += 1;
  if (fund2 !== null) count += 1;
  if (fund3 !== null) count += 1;
  if (fund4 !== null) count += 1;
  console.log('count: ', count);

  return (
    <div className='comparison-table'>
      <div className='headers row-odd '>
        <div className='column-1'>Scheme</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>{fund1.details.name}</div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>{fund2.details.name}</div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>{fund3.details.name}</div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>{fund4.details.name}</div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>Class</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            {fund1.details.scheme_class}
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            {fund2.details.scheme_class}
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            {fund3.details.scheme_class}
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            {fund4.details.scheme_class}
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>Risk</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            {fund1.details.riskometer}
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            {fund2.details.riskometer}
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            {fund3.details.riskometer}
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            {fund4.details.riskometer}
          </div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>Category</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            {fund1.details.category}
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            {fund2.details.category}
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            {fund3.details.category}
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            {fund4.details.category}
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>Rating</div>
        {fund1 ? (
          <div
            className={`column-2 width-${count}`}
            style={
              fund1.details.rating > 2 ? { color: 'green' } : { color: 'red' }
            }
          >
            {fund1.details.rating}
          </div>
        ) : null}
        {fund2 ? (
          <div
            className={`column-3 width-${count}`}
            style={
              fund2.details.rating > 2 ? { color: 'green' } : { color: 'red' }
            }
          >
            {fund2.details.rating}
          </div>
        ) : null}
        {fund3 ? (
          <div
            className={`column-4 width-${count}`}
            style={
              fund3.details.rating > 2 ? { color: 'green' } : { color: 'red' }
            }
          >
            {fund3.details.rating}
          </div>
        ) : null}
        {fund4 ? (
          <div
            className={`column-5 width-${count}`}
            style={
              fund4.details.rating > 2 ? { color: 'green' } : { color: 'red' }
            }
          >
            {fund4.details.rating}
          </div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>AMC</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            {fund1.details.amc.name}
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            {fund2.details.amc.name}
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            {fund3.details.amc.name}
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            {fund4.details.amc.name}
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>
          Assets (AUM)
          <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
            Rs in crores
          </div>
        </div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            {fund1.details.amc.aum}
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            {fund2.details.amc.aum}
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            {fund3.details.amc.aum}
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            {fund4.details.amc.aum}
          </div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>Benchmark</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            {fund1.details.benchmark.name}
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            {fund2.details.benchmark.name}
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            {fund3.details.benchmark.name}
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            {fund4.details.benchmark.name}
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>Minimum Investment (Rs)</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            {fund1.details.minimum_sip_subscription}
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            {fund2.details.minimum_sip_subscription}
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            {fund3.details.minimum_sip_subscription}
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            {fund4.details.minimum_sip_subscription}
          </div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>Latest NAV (Rs/Units)</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div>{fund1.nav}</div>
            <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
              {fund1.nav_refresh_date.slice(0, 10)}
            </div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div>{fund2.nav}</div>
            <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
              {fund2.nav_refresh_date.slice(0, 10)}
            </div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div>{fund3.nav}</div>
            <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
              {fund3.nav_refresh_date.slice(0, 10)}
            </div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div>{fund4.nav}</div>
            <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
              {fund4.nav_refresh_date.slice(0, 10)}
            </div>
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>Scheme Type</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div>{fund1.details.scheme_type}</div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div>{fund2.details.scheme_type}</div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div>{fund3.details.scheme_type}</div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div>{fund4.details.scheme_type}</div>
          </div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>3-year Returns</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div
              style={
                fund1.details.return_3yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund1.details.return_3yr}%
            </div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div
              style={
                fund2.details.return_3yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund2.details.return_3yr}%
            </div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div
              style={
                fund3.details.return_3yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund3.details.return_3yr}%
            </div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div
              style={
                fund4.details.return_3yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund4.details.return_3yr}%
            </div>
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>5-year Returns</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div
              style={
                fund1.details.return_5yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund1.details.return_5yr}%
            </div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div
              style={
                fund2.details.return_5yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund2.details.return_5yr}%
            </div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div
              style={
                fund3.details.return_5yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund3.details.return_5yr}%
            </div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div
              style={
                fund4.details.return_5yr > 0
                  ? { color: 'green' }
                  : { color: 'red' }
              }
            >
              {fund4.details.return_5yr}%
            </div>
          </div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>Exit Load</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div>{fund1.details.exit_load}</div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div>{fund2.details.exit_load}</div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div>{fund3.details.exit_load}</div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div>{fund4.details.exit_load}</div>
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>Load Comment</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div>{fund1.details.exit_load_text}</div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div>{fund2.details.exit_load_text}</div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div>{fund3.details.exit_load_text}</div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div>{fund4.details.exit_load_text}</div>
          </div>
        ) : null}
      </div>
      <div className='row-even'>
        <div className='column-1'>Objective</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div>{fund1.details.objective}</div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div>{fund2.details.objective}</div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div>{fund3.details.objective}</div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div>{fund4.details.objective}</div>
          </div>
        ) : null}
      </div>
      <div className='row-odd'>
        <div className='column-1'>Suitability</div>
        {fund1 ? (
          <div className={`column-2 width-${count}`}>
            <div>{fund1.details.suitability}</div>
          </div>
        ) : null}
        {fund2 ? (
          <div className={`column-3 width-${count}`}>
            <div>{fund2.details.suitability}</div>
          </div>
        ) : null}
        {fund3 ? (
          <div className={`column-4 width-${count}`}>
            <div>{fund3.details.suitability}</div>
          </div>
        ) : null}
        {fund4 ? (
          <div className={`column-5 width-${count}`}>
            <div>{fund4.details.suitability}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default ComparisonTable;

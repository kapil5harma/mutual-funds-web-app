import React from 'react';

const ComparisonTable = props => {
  const { fund1, fund2 } = props;

  return (
    <div className='comparison-table'>
      <div className='headers row-odd '>
        <div className='column-1'>Scheme</div>
        <div className='column-2'>{fund1.details.name}</div>
        <div className='column-3'>{fund2.details.name}</div>
      </div>
      <div className='row-even'>
        <div className='column-1'>Class</div>
        <div className='column-2'>{fund1.details.scheme_class}</div>
        <div className='column-3'>{fund2.details.scheme_class}</div>
      </div>
      <div className='row-odd'>
        <div className='column-1'>Risk</div>
        <div className='column-2'>{fund1.details.riskometer}</div>
        <div className='column-3'>{fund2.details.riskometer}</div>
      </div>
      <div className='row-even'>
        <div className='column-1'>Category</div>
        <div className='column-2'>{fund1.details.category}</div>
        <div className='column-3'>{fund2.details.category}</div>
      </div>
      <div className='row-odd'>
        <div className='column-1'>Rating</div>
        <div
          className='column-2'
          style={
            fund1.details.rating > 2 ? { color: 'green' } : { color: 'red' }
          }
        >
          {fund1.details.rating}
        </div>
        <div
          className='column-3'
          style={
            fund2.details.rating > 2 ? { color: 'green' } : { color: 'red' }
          }
        >
          {fund2.details.rating}
        </div>
      </div>
      <div className='row-even'>
        <div className='column-1'>AMC</div>
        <div className='column-2'>{fund1.details.amc.name}</div>
        <div className='column-3'>{fund2.details.amc.name}</div>
      </div>
      <div className='row-odd'>
        <div className='column-1'>
          Assets (AUM)
          <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
            Rs in crores
          </div>
        </div>
        <div className='column-2'>{fund1.details.amc.aum}</div>
        <div className='column-3'>{fund2.details.amc.aum}</div>
      </div>
      <div className='row-even'>
        <div className='column-1'>Benchmark</div>
        <div className='column-2'>{fund1.details.benchmark.name}</div>
        <div className='column-3'>{fund2.details.benchmark.name}</div>
      </div>
      <div className='row-odd'>
        <div className='column-1'>Minimum Investment (Rs)</div>
        <div className='column-2'>{fund1.details.minimum_sip_subscription}</div>
        <div className='column-3'>{fund2.details.minimum_sip_subscription}</div>
      </div>
      <div className='row-even'>
        <div className='column-1'>Latest NAV (Rs/Units)</div>
        <div className='column-2'>
          <div>{fund1.nav}</div>
          <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
            {fund1.nav_refresh_date.slice(0, 10)}
          </div>
        </div>
        <div className='column-3'>
          <div>{fund2.nav}</div>
          <div style={{ color: 'ececec', fontSize: '0.75rem' }}>
            {fund2.nav_refresh_date.slice(0, 10)}
          </div>
        </div>
      </div>
      <div className='row-odd'>
        <div className='column-1'>Scheme Type</div>
        <div className='column-2'>
          <div>{fund1.details.scheme_type}</div>
        </div>
        <div className='column-3'>
          <div>{fund2.details.scheme_type}</div>
        </div>
      </div>
      <div className='row-even'>
        <div className='column-1'>3-year Returns</div>
        <div className='column-2'>
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
        <div className='column-3'>
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
      </div>
      <div className='row-odd'>
        <div className='column-1'>5-year Returns</div>
        <div className='column-2'>
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
        <div className='column-3'>
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
      </div>
      <div className='row-even'>
        <div className='column-1'>Exit Load</div>
        <div className='column-2'>
          <div>{fund1.details.exit_load}</div>
        </div>
        <div className='column-3'>
          <div>{fund2.details.exit_load}</div>
        </div>
      </div>
      <div className='row-odd'>
        <div className='column-1'>Load Comment</div>
        <div className='column-2'>
          <div>{fund1.details.exit_load_text}</div>
        </div>
        <div className='column-3'>
          <div>{fund2.details.exit_load_text}</div>
        </div>
      </div>
      <div className='row-even'>
        <div className='column-1'>Objective</div>
        <div className='column-2'>
          <div>{fund1.details.objective}</div>
        </div>
        <div className='column-3'>
          <div>{fund2.details.objective}</div>
        </div>
      </div>
      <div className='row-odd'>
        <div className='column-1'>Suitability</div>
        <div className='column-2'>
          <div>{fund1.details.suitability}</div>
        </div>
        <div className='column-3'>
          <div>{fund2.details.suitability}</div>
        </div>
      </div>
    </div>
  );
};
export default ComparisonTable;

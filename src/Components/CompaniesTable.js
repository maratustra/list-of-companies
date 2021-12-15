// import React from 'react';
// import styled from 'styled-components';

// import { AddCompanyModal } from './AddCompanyModal';
// import { TableList } from './TableList';

// const TableStyled = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 10px;
//   border: 1px solid black;
// `;

// const TableRowBlock = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const TableHeader = styled.div`
//   width: 500px;
//   border: 1px solid black;
//   font-size: 15px;
//   text-align: center;
// `;

// const TableColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export class CompaniesTable extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = [];
//   }

//   addCompany(company) {
//     this.setState(companies => [...companies, company]);
//   }

//   deleteCompanyRow(index) {
//     console.log('index', index);
//     this.setState(companies => companies.filter((item, i) => index !== i));
//   }

//   render() {
//     console.log(this.state);

//     return (
//       <>
//         <AddCompanyModal addCompany={this.addCompany} />

//         <TableStyled>
//           <TableRowBlock>
//             <TableHeader>Наименование организации</TableHeader>
//             <TableHeader>ИНН</TableHeader>
//             <TableHeader>ОГРН</TableHeader>
//             <TableHeader>Дата регистрации</TableHeader>
//             <TableHeader>Адрес регистрации</TableHeader>
//             <TableHeader></TableHeader>
//           </TableRowBlock>
//           <TableColumn>
//             {this.state.map((company, index) =>
//               <TableRowBlock key={index}>
//                 <TableList key={index}
//                   company={company}
//                   deleteCompanyRow={this.deleteCompanyRow}
//                   index={index} />
//               </TableRowBlock>
//             )}
//           </TableColumn>
//         </TableStyled>
//       </>
//     );
//   }
// }

import React from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBCheckbox } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // add this line to import the styles

export default function Table() {
  return (
      <MDBTable align='middle'>
        <MDBTableHead light>
          <tr>
            <th scope='col'>
              <MDBCheckbox></MDBCheckbox>
            </th>
            <th scope='col'>Lorem</th>
            <th scope='col'>Ipsum</th>
            <th scope='col'>Dolor</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th scope='col'>
              <MDBCheckbox></MDBCheckbox>
            </th>
            <td>Sit</td>
            <td>Amet</td>
            <td>Consectetur</td>
          </tr>
          <tr>
            <th scope='col'>
              <MDBCheckbox></MDBCheckbox>
            </th>
            <td>Adipsicing</td>
            <td>Elit</td>
            <td>Sint</td>
          </tr>
          <tr>
            <th scope='col'>
              <MDBCheckbox></MDBCheckbox>
            </th>
            <td>Hic</td>
            <td>Fugiat</td>
            <td>Temporibus</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
  );
}
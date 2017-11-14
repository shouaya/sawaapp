import React, { Component } from 'react';
import { Container, Table, Icon, Label } from 'semantic-ui-react'
class CompanyBase extends Component {
     render() {
        const info = this.props.info
        const listType = info.cocategory.map((item) =>
          <Label color='blue' key={item.category.id} size='large'>
          {item.category.name}
          </Label>
        );
        const representative = info.representative === null ? "" : info.representative.name
        const linkco = info.cncompany === null ? "" : info.cncompany.name
        return (
          <Container textAlign='justified'>
            <h3><Icon name='book' />基本情報</h3>
             <Table color='blue' celled>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell positive>代表者</Table.Cell>
                    <Table.Cell>{representative}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell positive>資本金</Table.Cell>
                    <Table.Cell>{info.capital}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell positive>電話番号</Table.Cell>
                    <Table.Cell>{info.telphone}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell positive>メール</Table.Cell>
                    <Table.Cell>{info.mail}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell positive>設立年月日</Table.Cell>
                    <Table.Cell>{info.buildDate}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell positive>業務</Table.Cell>
                    <Table.Cell>{info.business}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell positive>業界分類</Table.Cell>
                    <Table.Cell>{listType}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell positive>中国関連会社</Table.Cell>
                    <Table.Cell>{linkco}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
          </Container>
        );
    }
}
export default CompanyBase;
import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import regular from '../Font/Montserrat-Regular.ttf';
import medium from '../Font/Montserrat-Medium.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [{ src: regular }, { src: medium }],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Montserrat',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 10,
    paddingRight: 1,
    paddingLeft: 1,
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  upperbody: {
    width: '100%',
    marginTop: '7.5pt',
    border: '0.1pt solid #000',
    flexDirection: 'row',
    display: 'flex',
  },
  addressInfo: {
    borderRight: '0.1pt solid #000',
    width: '50%',
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 0.5,
    borderBottom: '0.1pt solid #000',
    lineHeight: '1.4pt',
  },
  billingInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  billingunit: {
    display: 'flex',
    flexDirection: 'row',
  },
  billingblock: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '50%',
    lineHeight: '1.6rem',
    padding: '0.5rem',
    borderBottom: '0.1pt solid #000',
  },
  lowerbody: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  billRow: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.6pt',
  },
  footer: {
    width: '50%',
    marginTop: '15pt',
    marginLeft: '50%',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.4pt',
  },
});

const PdfFile = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.title}>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>SALES ORDER</Text>
        </View>
        <View style={styles.upperbody}>
          <View style={styles.addressInfo}>
            <View style={styles.address}>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                Max Electronics
              </Text>
              <Text>A 204 , Shivaji Nagar , Bengaluru</Text>
              <Text>GSTIN/UIN:29AAA7879D1Z0</Text>
              <Text>State Name : Karnataka , Code:29 </Text>
              <Text>Contact:9810123456</Text>
              <Text>E-mail:Max@guruelectronics.com</Text>
              <Text> www.maxelectronics.com</Text>
            </View>
            <View style={styles.address}>
              <Text>Despatch To</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                Hi-Tech Computer World
              </Text>
              <Text>361 City Plaza</Text>
              <Text>M.G. Road </Text>
              <Text>Bengaluru</Text>
              <Text>GSTIN/UIN :29AAA7879D1Z0</Text>
              <Text>State Name : Karnataka Code:29 </Text>
            </View>
            <View style={styles.address}>
              <Text>Invoice To</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                Hi-Tech Computer World
              </Text>
              <Text>361 City Plaza</Text>
              <Text>M.G. Road </Text>
              <Text>Bengaluru</Text>
              <Text>GSTIN/UIN :29AAA7879D1Z0</Text>
              <Text>State Name : Karnataka Code:29 </Text>
            </View>
          </View>
          <View style={styles.billingInfo}>
            <View style={styles.billingunit}>
              <View
                style={Object.assign({}, styles.billingblock, {
                  borderRight: '0.1pt solid #000',
                })}
              >
                <Text>Voucher No.</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>1</Text>
              </View>
              <View style={styles.billingblock}>
                <Text>Dated</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                  17-Mar-2020
                </Text>
              </View>
            </View>
            <View style={styles.billingunit}>
              <View
                style={Object.assign({}, styles.billingblock, {
                  borderRight: '0.1pt solid #000',
                })}
              ></View>
              <View style={styles.billingblock}>
                <Text>Mode/Terms of Payment</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                  15 days via Cheque
                </Text>
              </View>
            </View>
            <View style={styles.billingunit}>
              <View
                style={Object.assign({}, styles.billingblock, {
                  borderRight: '0.1pt solid #000',
                })}
              >
                <Text>Buyer's Ref/Order no</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>1</Text>
              </View>
              <View style={styles.billingblock}>
                <Text>Other References</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}></Text>
              </View>
            </View>
            <View style={styles.billingunit}>
              <View
                style={Object.assign({}, styles.billingblock, {
                  borderRight: '0.1pt solid #000',
                })}
              >
                <Text>Dispatch through</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                  By Road
                </Text>
              </View>
              <View style={styles.billingblock}>
                <Text>Destination</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12 }}></Text>
              </View>
            </View>
            <View
              style={Object.assign({}, styles.billingblock, {
                borderBottom: 'none',
              })}
            >
              <Text>Terms of Delivery</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
                Ex-Factory Delivery
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.lowerbody}>
          <View style={{ ...styles.billRow, flexBasis: '5%' }}>
            <View
              style={{
                border: '0.1pt solid #000',
                borderTop: 'none',
                textAlign: 'center',
              }}
            >
              <Text>SL.No</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text>1</Text>
              <Text>2</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '30%' }}>
            <Text
              style={{
                borderBottom: '0.1pt solid #000',
                borderRight: '0.1pt solid #000',
                textAlign: 'center',
              }}
            >
              Description of Goods
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                Asus 16.6 inch Monitor
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                Dell 17 inch Monitor{' '}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: '3rem',
                }}
              >
                Central Tax
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  textAlign: 'right',
                }}
              >
                State Tax
              </Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '0.1pt solid #000',
                borderRight: '0.1pt solid #000',
                textAlign: 'center',
              }}
            >
              HSN/SAC
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text>8471</Text>
              <Text>8471</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '0.1pt solid #000',
                borderRight: '0.1pt solid #000',
                textAlign: 'center',
              }}
            >
              Due On
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text>3 Days</Text>
              <Text>3 Days</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '0.1pt solid #000',
                borderRight: '0.1pt solid #000',
                textAlign: 'center',
              }}
            >
              Quantity
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text>10 Nos</Text>
              <Text>10 Nos</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
                fontWeight: 'bold',
              }}
            >
              20 Nos
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '0.1pt solid #000',
                borderRight: '0.1pt solid #000',
                textAlign: 'center',
              }}
            >
              Rate
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text>7000.00</Text>
              <Text>8000.00</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '0.1pt solid #000',
                borderRight: '0.1pt solid #000',
                textAlign: 'center',
              }}
            >
              per
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text>Nos</Text>
              <Text>Nos</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '15%' }}>
            <Text
              style={{
                borderBottom: '0.1pt solid #000',
                borderRight: '0.1pt solid #000',
                textAlign: 'center',
              }}
            >
              Amount
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '0.1pt solid #000',
                height: 100,
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 11 }}>
                70,000.00
              </Text>
              <Text style={{ fontWeight: 'bold', fontSize: 11 }}>
                80,000.00
              </Text>
              <Text
                style={{
                  marginTop: 3,
                  fontWeight: 'bold',
                  fontSize: 12,
                }}
              >
                13,500.00
              </Text>
              <Text style={{ fontWeight: 'bold', fontSize: 11 }}>
                13,500.00
              </Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                border: '0.1pt solid #000',
                fontWeight: 'bold',
                fontSize: 10,
              }}
            >
              ₹1,77,000.00
            </Text>
          </View>
        </View>
        <View
          style={{ width: '100%', border: '0.1pt solid #000', display: 'flex' }}
        >
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: '1.5pt',
              padding: '0.3pt',
            }}
          >
            <Text>Amount Chargeable (in Words)</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>
              INR One Lakh Seventy Thousand Only
            </Text>
          </View>
          <View style={styles.footer}>
            <Text>Company's Bank Details</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>Bank Name :</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: '2pt',
                }}
              >
                ICICI
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>A/c No. :</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: '2pt',
                }}
              >
                0400312022548
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text>Branch & IFSC Code :</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  marginLeft: '2pt',
                }}
              >
                SBI100025SE
              </Text>
            </View>
            <View
              style={{
                height: 50,
                border: '0.1pt solid #000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>
                Max Electronics
              </Text>
              <Text style={{ textAlign: 'right' }}>Authorised Signature</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;

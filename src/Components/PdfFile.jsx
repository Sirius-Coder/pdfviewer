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
    width: '80rem',
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  upperbody: {
    width: '100%',
    marginTop: '1rem',
    border: '1px solid #000',
    flexDirection: 'row',
    display: 'flex',
  },
  addressInfo: {
    borderRight: '1px solid #000',
    width: '50%',
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '0.5rem',
    borderBottom: '1px solid #000',
    lineHeight: '1.6rem',
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
    borderBottom: '1px solid #000',
  },
  lowerbody: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  billRow: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.6rem',
  },
  footer: {
    width: '50%',
    marginTop: '15rem',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.5rem',
  },
});

const PdfFile = () => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.title}>
          <Text style={{ fontWeight: 'bold', fontSize: '1.6rem' }}>
            SALES ORDER
          </Text>
        </View>
        <View style={styles.upperbody}>
          <View style={styles.addressInfo}>
            <View style={styles.address}>
              <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
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
              <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
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
              <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
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
                  borderRight: '1px solid #000',
                })}
              >
                <Text>Voucher No.</Text>
                <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                  1
                </Text>
              </View>
              <View style={styles.billingblock}>
                <Text>Dated</Text>
                <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                  17-Mar-2020
                </Text>
              </View>
            </View>
            <View style={styles.billingunit}>
              <View
                style={Object.assign({}, styles.billingblock, {
                  borderRight: '1px solid #000',
                })}
              ></View>
              <View style={styles.billingblock}>
                <Text>Mode/Terms of Payment</Text>
                <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                  15 days via Cheque
                </Text>
              </View>
            </View>
            <View style={styles.billingunit}>
              <View
                style={Object.assign({}, styles.billingblock, {
                  borderRight: '1px solid #000',
                })}
              >
                <Text>Buyer's Ref/Order no</Text>
                <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                  1
                </Text>
              </View>
              <View style={styles.billingblock}>
                <Text>Other References</Text>
                <Text
                  style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
                ></Text>
              </View>
            </View>
            <View style={styles.billingunit}>
              <View
                style={Object.assign({}, styles.billingblock, {
                  borderRight: '1px solid #000',
                })}
              >
                <Text>Dispatch through</Text>
                <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                  By Road
                </Text>
              </View>
              <View style={styles.billingblock}>
                <Text>Destination</Text>
                <Text
                  style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
                ></Text>
              </View>
            </View>
            <View
              style={Object.assign({}, styles.billingblock, {
                borderBottom: 'none',
              })}
            >
              <Text>Terms of Delivery</Text>
              <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                Ex-Factory Delivery
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.lowerbody}>
          <View style={{ ...styles.billRow, flexBasis: '5%' }}>
            <View
              style={{
                border: '1px solid #000',
                borderTop: 'none',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              <Text>SL. No</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text>1</Text>
              <Text>2</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                padding: '.25rem',
                border: '1px solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '30%' }}>
            <Text
              style={{
                borderBottom: '1px solid #000',
                borderRight: '1px solid #000',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              Description of Goods
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Asus 16.6 inch Monitor
              </Text>
              <Text style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Dell 17 inch Monitor{' '}
              </Text>
              <Text
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  textAlign: 'right',
                  marginTop: '3rem',
                }}
              >
                Central Tax
              </Text>
              <Text
                style={{
                  fontSize: '1.25rem',
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
                padding: '.25rem',
                border: '1px solid #000',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '1px solid #000',
                borderRight: '1px solid #000',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              HSN/SAC
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                alignItems: 'center',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text>8471</Text>
              <Text>8471</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                padding: '.25rem',
                border: '1px solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '1px solid #000',
                borderRight: '1px solid #000',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              Due On
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                alignItems: 'center',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text>3 Days</Text>
              <Text>3 Days</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                padding: '.25rem',
                border: '1px solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '1px solid #000',
                borderRight: '1px solid #000',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              Quantity
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                alignItems: 'center',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text>10 Nos</Text>
              <Text>10 Nos</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                padding: '.25rem',
                border: '1px solid #000',
                fontWeight: 'bold',
              }}
            >
              20 Nos
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '1px solid #000',
                borderRight: '1px solid #000',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              Rate
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                alignItems: 'center',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text>7000.00</Text>
              <Text>8000.00</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                padding: '.25rem',
                border: '1px solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '10%' }}>
            <Text
              style={{
                borderBottom: '1px solid #000',
                borderRight: '1px solid #000',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              per
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                alignItems: 'center',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text>Nos</Text>
              <Text>Nos</Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                padding: '.25rem',
                border: '1px solid #000',
                color: 'transparent',
              }}
            >
              Total
            </Text>
          </View>
          <View style={{ ...styles.billRow, flexBasis: '15%' }}>
            <Text
              style={{
                borderBottom: '1px solid #000',
                borderRight: '1px solid #000',
                textAlign: 'center',
                padding: '0.25rem',
              }}
            >
              Amount
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
                alignItems: 'center',
                border: '1px solid #000',
                height: '15rem',
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                70,000.00
              </Text>
              <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                80,000.00
              </Text>
              <Text
                style={{
                  marginTop: '3rem',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                }}
              >
                13,500.00
              </Text>
              <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
                13,500.00
              </Text>
            </View>
            <Text
              style={{
                textAlign: 'right',
                padding: '.25rem',
                border: '1px solid #000',
                fontWeight: 'bold',
                fontSize: '1.25rem',
              }}
            >
              ₹1,77,000.00
            </Text>
          </View>
        </View>
        <View
          style={{ width: '100%', border: '1px solid #000', display: 'flex' }}
        >
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              lineHeight: '2.5rem',
              padding: '0.25rem',
            }}
          >
            <Text>Amount Chargeable (in Words)</Text>
            <Text style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
              INR One Lakh Seventy Thousand Only
            </Text>
          </View>
          <View style={styles.footer}>
            <Text>Company's Bank Details</Text>
            <View>
              <Text>Bank Name :</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: '2rem',
                }}
              >
                ICICI
              </Text>
            </View>
            <View>
              <Text>A/c No. :</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  marginLeft: '2rem',
                }}
              >
                0400312022548
              </Text>
            </View>
            <View>
              <Text>Branch & IFSC Code :</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  textAlign: 'left',
                  marginLeft: '2rem',
                }}
              >
                SBI100025SE
              </Text>
            </View>
            <View
              style={{
                height: '5rem',
                border: '1px solid #000',
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

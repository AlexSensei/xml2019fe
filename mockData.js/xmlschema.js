export default `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema" elementFormDefault="qualified"
    targetNamespace="http://www.ftn.uns.ac.rs/naucniRad"
    xmlns:nr="http://www.ftn.uns.ac.rs/naucniRad">

    <xs:element name="naucniRad">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="prvaStrana"/>
                <xs:element name="naslov" type="xs:string"/>
                <xs:element name="autor" type="nr:autor" maxOccurs="unbounded" minOccurs="1"/>
                <xs:element name="abstrakt" type="nr:abstrakt"/>
                <xs:element name="sadrzaj" type="nr:sadrzaj"/>
                <xs:element name="reference" type="nr:reference"/>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
    <xs:complexType name="sadrzaj" abstract="false" block="">
        <xs:sequence>
            <xs:element name="naslov" type="xs:string"/>
            <xs:element name="brStrane" type="xs:int"/>
            <xs:element name="slika" maxOccurs="unbounded" minOccurs="0"/>
            <xs:element maxOccurs="unbounded" name="paragraf" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="autor" abstract="false">
        <xs:sequence>
            <xs:element name="ime" type="xs:string"/>
            <xs:element name="srednjeIme">
                <xs:simpleType>
                    <xs:restriction base="xs:string">
                        <xs:pattern value=""/>
                    </xs:restriction>
                </xs:simpleType>
            </xs:element>
            <xs:element name="prezime" type="xs:string"/>
            <xs:element name="ustanova" type="nr:ustanova"/>
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="ustanova" abstract="false">
        <xs:sequence>
            <xs:element name="ime" type="xs:string"/>
            <xs:element name="grad" type="xs:string"/>
            <xs:element name="opstina" minOccurs="0" type="xs:string"/>
            <xs:element name="drzava" type="xs:string"/>
        </xs:sequence>
    </xs:complexType>
    <xs:complexType abstract="false" name="abstrakt">
        <xs:sequence>
            <xs:element name="Purpose" type="xs:string"/>
            <xs:element name="designMethodologyApproach" type="xs:string"/>
            <xs:element name="Findings" type="xs:string"/>
            <xs:element name="researchLimitationsImplications" type="xs:string"/>
            <xs:element name="PracticalImplications" type="xs:string"/>
            <xs:element name="OriginalityValue" type="xs:string"/>
            <xs:element name="Keywords">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element maxOccurs="12" minOccurs="0" name="keyword" type="xs:string"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
            <xs:element name="PaperType">
                <xs:simpleType>
                    <xs:restriction base="xs:string">
                        <xs:enumeration value="Research paper"/>
                        <xs:enumeration value="Viewpoint"/>
                        <xs:enumeration value="Tehnical paper"/>
                        <xs:enumeration value="Conceptual paper"/>
                        <xs:enumeration value="Literature review"/>
                        <xs:enumeration value="General review"/>
                    </xs:restriction>
                </xs:simpleType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="reference">
        <xs:sequence>
            <xs:element name="referenca" type="nr:referenca"/>
        </xs:sequence>
    </xs:complexType>
    <xs:complexType name="referenca"/>
</xs:schema>
`;

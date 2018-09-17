pragma solidity ^0.4.18;


contract MedicalRecord {
    struct Record {
        string conditions;
        string immunizations;
        string medications;
    }

    uint public nextRecordNum;

    mapping (uint => Record) public records;

    function newRecord(string _conditions, string _immunizations, string _medications) external returns(uint recordID) {

        require((bytes(_conditions).length <= 1500) && (bytes(_immunizations).length <= 1500) && (bytes(_medications).length <= 1500));

        recordID = nextRecordNum++;

        records[recordID] = Record(_conditions, _immunizations, _medications);

        return recordID;
    }

    function updateRecord(uint recordID, string _conditions, string _immunizations, string _medications) external {
        Record storage con = records[recordID];

        con.conditions = _conditions;
        con.immunizations = _immunizations;
        con.medications = _medications;
    }
}
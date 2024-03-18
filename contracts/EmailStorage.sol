
pragma solidity ^0.8.0;

contract EmailStorage {
    struct Email {
        string sentMail;
        string receivedMail;
        string subject;
        string mailDataIPFSHash;
        string time;
    }

    mapping(uint256 => Email) public emails;
    uint256 public emailCount;

    event EmailSent(uint256 indexed id, string indexed sentMail, string indexed receivedMail, string subject, string mailDataIPFSHash, string time);

    function sendEmail(string memory _sentMail, string memory _receivedMail, string memory _subject, string memory _mailDataIPFSHash, string memory _time) external {
        emailCount++;
        emails[emailCount] = Email(_sentMail, _receivedMail, _subject, _mailDataIPFSHash, _time);
        emit EmailSent(emailCount, _sentMail, _receivedMail, _subject, _mailDataIPFSHash, _time);
    }

    function getEmail(uint256 _id) external view returns (string memory, string memory, string memory, string memory, string memory) {
        require(_id > 0 && _id <= emailCount, "Invalid email ID");
        Email memory email = emails[_id];
        return (email.sentMail, email.receivedMail, email.subject, email.mailDataIPFSHash, email.time);
    }
}

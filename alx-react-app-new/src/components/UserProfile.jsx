const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '10px', borderRadius: '8px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', maxWidth: '300px' }}>
      <h2 style={{ color: 'blue', marginBottom: '5px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
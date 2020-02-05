import ResetPasswordForm from "../components/Reset";

const Reset = props => (
  <div>
    <p>Reset Your Password</p>
    <ResetPasswordForm resetToken={props.query.resetToken} />
  </div>
);

export default Reset;

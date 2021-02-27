import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SummaryForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] = useState(
    false
  );

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}>Terms and conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsAndConditionsChecked}
          onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
          label={checkboxLabel}
        ></Form.Check>
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={!termsAndConditionsChecked}
      >
        Confirm order{' '}
      </Button>
    </Form>
  );
};

export default SummaryForm;

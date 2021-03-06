import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SummaryForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] = useState(
    false
  );

  const popover = (
    <Popover>
      <Popover.Content>No icecream will actually be delivered</Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and conditions</span>
      </OverlayTrigger>
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

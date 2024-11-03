1. Unit Testing
Focuses on individual components or functions to verify their behaviour in isolation. 
Device and Terminal Management
Test Case 1: Verify that a device’s status can be correctly set to "armed" or "unarmed."
Expected Outcome: The device state updates to "armed" or "unarmed" based on user input.
Test Case 2: Validate that an admin can update the description, enable state, and secrets for a terminal.
Expected Outcome: The terminal description, state, and secrets reflect the new values set by the admin.
Test Case 3: Ensure that users without admin permissions cannot update device descriptions or secrets.
Expected Outcome: Attempting to update these fields returns an authorization error.
User Role Verification (via NOMOS)
Test Case 4: Verify that users with admin roles (per NOMOS) can access system logs.
Expected Outcome: Admin users can retrieve log data, while other roles receive an access error.
Test Case 5: Check that role-based permissions accurately restrict standard users from accessing admin-level functions.
Expected Outcome: Standard users attempting to perform admin actions receive a permissions error.
2. Integration Testing
Focuses on interactions between components to ensure they work together as expected, especially with data flow across different parts of the system.
User Authentication and Role Verification
Test Case 6: Test the login process with OAuth and NOMOS role verification.
Steps:
Attempt to log in with a valid user account.
Validate that NOMOS returns the correct role (e.g., Admin, Granter, User).
Expected Outcome: User is authenticated and granted access according to their role.
Test Case 7: Verify that NOMOS role updates are reflected in TACOS without a manual refresh.
Expected Outcome: Role changes in NOMOS are automatically recognized in TACOS, updating user permissions accordingly.
Device and Terminal Interaction
Test Case 8: Confirm that devices communicate with TACOS securely over TLS.
Steps:
Connect a device to TACOS.
Send a status update through the TLS channel.
Expected Outcome: The status update is received securely, and an unauthorized (non-TLS) connection attempt is rejected.
Test Case 9: Test the HMAC-based authentication for terminal requests.
Steps:
A terminal sends an authenticated request with a nonce and timestamp.
Repeat the request with the same nonce.
Expected Outcome: The first request is accepted, and the second request (replay attempt) is rejected.
3. QA Testing
QA tests evaluate the system as a whole, covering end-to-end scenarios and user acceptance criteria.
User Role and Permission Scenarios
Test Case 10: Simulate an admin adding a new device and updating configurations.
Steps:
Log in as an admin.
Add a device and update its description, state, and secrets.
Expected Outcome: The device is added successfully, and configurations reflect the admin’s updates.
Test Case 11: Check that anonymous clients can only query device states and cannot access control features.
Steps:
Attempt to access device states as an anonymous user.
Attempt to arm or unarm a device without logging in.
Expected Outcome: The device state query is successful, but control features are inaccessible.
Terminal and Device Security Verification
Test Case 12: Verify that terminal status reports are logged.
Expected Outcome: Each status report from a terminal is logged in the system, accessible only by admins.
Test Case 13: Validate that devices disconnect properly when TLS is lost.
Expected Outcome: When a TLS connection is disrupted, devices automatically disconnect and cannot communicate until the secure connection is re-established.


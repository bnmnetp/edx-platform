define(['js/common_helpers/template_helpers', 'js/student_account/enrollment_interface'],
    function(TemplateHelpers, EnrollmentInterface) {
        describe("edx.student.account.EnrollmentInterface", function() {
            'use strict';

            it("find course modes using modeInArray ", function() {
                var course_modes = [
                    {
                        slug: 'honor'
                    },
                    {
                        slug: 'professional'
                    }
                ],
                
                expect(EnrollmentInterface.modeInArray('professional')).toBe(true);
                expect(EnrollmentInterface.modeInArray('audit')).toBe(false);

            });
        });
    }
);
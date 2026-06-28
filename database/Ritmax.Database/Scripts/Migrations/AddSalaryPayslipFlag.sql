-- Adds IsPayslipGenerated to dbo.EmployeeSalaryDetails. Safe to re-run.
IF COL_LENGTH('dbo.EmployeeSalaryDetails', 'IsPayslipGenerated') IS NULL
BEGIN
    ALTER TABLE [dbo].[EmployeeSalaryDetails]
        ADD [IsPayslipGenerated] BIT NOT NULL
            CONSTRAINT [DF_EmployeeSalaryDetails_IsPayslipGenerated] DEFAULT (0);
END
GO

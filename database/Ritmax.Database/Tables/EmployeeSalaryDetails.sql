CREATE TABLE [dbo].[EmployeeSalaryDetails]
(
    [Id]                     INT              IDENTITY (1, 1) NOT NULL,
    [EmployeeId]             INT              NOT NULL,
    [Month]                  TINYINT          NOT NULL,        -- 1=Jan ... 12=Dec
    [Year]                   SMALLINT         NOT NULL,
    [PayDate]                DATE             NULL,

    -- Attendance days
    [StandardDays]           DECIMAL (5, 2)   NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_StandardDays] DEFAULT (0),
    [WorkedDays]             DECIMAL (5, 2)   NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_WorkedDays] DEFAULT (0),
    [LopDays]                DECIMAL (5, 2)   NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_LopDays] DEFAULT (0),

    -- Earnings
    [Basic]                  DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_Basic] DEFAULT (0),
    [Hra]                    DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_Hra] DEFAULT (0),
    [SpecialAllowance]       DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_SpecialAllowance] DEFAULT (0),
    [TelephoneReimbursement] DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_TelephoneReimbursement] DEFAULT (0),
    [OtherEarnings]          DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_OtherEarnings] DEFAULT (0),

    -- Deductions
    [ProvidentFund]          DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_ProvidentFund] DEFAULT (0),
    [IncomeTax]              DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_IncomeTax] DEFAULT (0),
    [ProfessionalTax]        DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_ProfessionalTax] DEFAULT (0),
    [Esi]                    DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_Esi] DEFAULT (0),
    [OtherDeductions]        DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_OtherDeductions] DEFAULT (0),

    -- Totals (calculated in UI, persisted for reporting)
    [GrossEarnings]          DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_GrossEarnings] DEFAULT (0),
    [GrossDeductions]        DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_GrossDeductions] DEFAULT (0),
    [NetPay]                 DECIMAL (18, 2)  NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_NetPay] DEFAULT (0),

    -- Status & remarks
    [Status]                 NVARCHAR (20)    NULL,            -- Draft / Finalized / Paid
    [Remarks]                NVARCHAR (500)   NULL,

    -- Locks salary edits once a payslip has been generated for this record
    [IsPayslipGenerated]     BIT              NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_IsPayslipGenerated] DEFAULT (0),

    -- Audit
    [CreatedBy]              NVARCHAR (100)   NULL,
    [CreatedDate]            DATETIME2 (7)    NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_CreatedDate] DEFAULT (SYSUTCDATETIME()),
    [ModifiedBy]             NVARCHAR (100)   NULL,
    [ModifiedDate]           DATETIME2 (7)    NULL,
    [UpdateTag]              NVARCHAR (50)    NULL,
    [UpdateGuid]             UNIQUEIDENTIFIER NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_UpdateGuid] DEFAULT (NEWID()),
    [IsDeleted]              BIT              NOT NULL CONSTRAINT [DF_EmployeeSalaryDetails_IsDeleted] DEFAULT (0),

    CONSTRAINT [PK_EmployeeSalaryDetails] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_EmployeeSalaryDetails_Employee] FOREIGN KEY ([EmployeeId]) REFERENCES [dbo].[Employee] ([Id]),
    CONSTRAINT [CK_EmployeeSalaryDetails_Month] CHECK ([Month] BETWEEN 1 AND 12)
);
GO

CREATE UNIQUE NONCLUSTERED INDEX [UX_EmployeeSalaryDetails_Emp_Month_Year]
    ON [dbo].[EmployeeSalaryDetails] ([EmployeeId], [Year], [Month]) WHERE [IsDeleted] = 0;
GO

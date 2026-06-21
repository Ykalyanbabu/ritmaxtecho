CREATE TABLE [dbo].[Payslips]
(
    [Id]               INT             IDENTITY (1, 1) NOT NULL,
    [EmployeeId]       INT             NOT NULL,
    [PayrollRunId]     INT             NOT NULL,
    [Period]           NVARCHAR (50)   NOT NULL,
    [PayDate]          DATE            NOT NULL,
    [PaidDays]         INT             NOT NULL,
    [LopDays]          INT             NOT NULL,
    [GrossEarnings]    DECIMAL (18, 2) NOT NULL,
    [TotalDeductions]  DECIMAL (18, 2) NOT NULL,
    [NetPay]           DECIMAL (18, 2) NOT NULL,
    [CreatedAt]        DATETIME2 (7)   NOT NULL CONSTRAINT [DF_Payslips_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]        DATETIME2 (7)   NULL,
    [IsDeleted]        BIT             NOT NULL CONSTRAINT [DF_Payslips_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_Payslips] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Payslips_Employee] FOREIGN KEY ([EmployeeId]) REFERENCES [dbo].[Employee] ([Id]),
    CONSTRAINT [FK_Payslips_PayrollRuns] FOREIGN KEY ([PayrollRunId]) REFERENCES [dbo].[PayrollRuns] ([Id])
);

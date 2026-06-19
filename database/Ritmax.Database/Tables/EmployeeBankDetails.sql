CREATE TABLE [dbo].[EmployeeBankDetails]
(
    [Id]            INT            IDENTITY (1, 1) NOT NULL,
    [EmployeeId]    INT            NOT NULL,
    [BankName]      NVARCHAR (100) NOT NULL,
    [AccountNumber] NVARCHAR (30)  NOT NULL,
    [Ifsc]          NVARCHAR (20)  NOT NULL,
    [CreatedAt]     DATETIME2 (7)  NOT NULL CONSTRAINT [DF_EmployeeBankDetails_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]     DATETIME2 (7)  NULL,
    [IsDeleted]     BIT            NOT NULL CONSTRAINT [DF_EmployeeBankDetails_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_EmployeeBankDetails] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_EmployeeBankDetails_Employees] FOREIGN KEY ([EmployeeId]) REFERENCES [dbo].[Employees] ([Id]),
    CONSTRAINT [UQ_EmployeeBankDetails_EmployeeId] UNIQUE ([EmployeeId])
);

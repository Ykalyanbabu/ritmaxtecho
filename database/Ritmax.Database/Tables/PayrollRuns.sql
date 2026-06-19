CREATE TABLE [dbo].[PayrollRuns]
(
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [CompanyId] INT            NOT NULL,
    [Period]    NVARCHAR (50)  NOT NULL,
    [PayDate]   DATE           NOT NULL,
    [Status]    NVARCHAR (50)  NOT NULL,
    [CreatedAt] DATETIME2 (7)  NOT NULL CONSTRAINT [DF_PayrollRuns_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt] DATETIME2 (7)  NULL,
    [IsDeleted] BIT            NOT NULL CONSTRAINT [DF_PayrollRuns_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_PayrollRuns] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_PayrollRuns_Companies] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Companies] ([Id])
);

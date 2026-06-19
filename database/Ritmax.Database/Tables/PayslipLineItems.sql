CREATE TABLE [dbo].[PayslipLineItems]
(
    [Id]          INT             IDENTITY (1, 1) NOT NULL,
    [PayslipId]   INT             NOT NULL,
    [Description] NVARCHAR (200)  NOT NULL,
    [Amount]      DECIMAL (18, 2) NOT NULL,
    [LineType]    INT             NOT NULL,
    [CreatedAt]   DATETIME2 (7)   NOT NULL CONSTRAINT [DF_PayslipLineItems_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]   DATETIME2 (7)   NULL,
    [IsDeleted]   BIT             NOT NULL CONSTRAINT [DF_PayslipLineItems_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_PayslipLineItems] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_PayslipLineItems_Payslips] FOREIGN KEY ([PayslipId]) REFERENCES [dbo].[Payslips] ([Id])
);

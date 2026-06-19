CREATE TABLE [dbo].[Departments]
(
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [CompanyId]   INT            NOT NULL,
    [Name]        NVARCHAR (100) NOT NULL,
    [Description] NVARCHAR (500) NULL,
    [CreatedAt]   DATETIME2 (7)  NOT NULL CONSTRAINT [DF_Departments_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]   DATETIME2 (7)  NULL,
    [IsDeleted]   BIT            NOT NULL CONSTRAINT [DF_Departments_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_Departments] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Departments_Companies] FOREIGN KEY ([CompanyId]) REFERENCES [dbo].[Companies] ([Id])
);

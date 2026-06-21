CREATE TABLE [dbo].[Industries]
(
    [Id]        INT            IDENTITY (1, 1) NOT NULL,
    [Name]      NVARCHAR (150) NOT NULL,
    [CreatedAt] DATETIME2 (7)  NOT NULL CONSTRAINT [DF_Industries_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt] DATETIME2 (7)  NULL,
    [IsDeleted] BIT            NOT NULL CONSTRAINT [DF_Industries_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_Industries] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [UQ_Industries_Name] UNIQUE ([Name])
);

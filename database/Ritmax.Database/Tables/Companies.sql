CREATE TABLE [dbo].[Companies]
(
    [Id]          INT            IDENTITY (1, 1) NOT NULL,
    [Name]        NVARCHAR (200) NOT NULL,
    [Address]     NVARCHAR (500) NOT NULL,
    [City]        NVARCHAR (200) NOT NULL,
    [Gstin]       NVARCHAR (20)  NOT NULL,
    [Pan]         NVARCHAR (20)  NOT NULL,
    [Phone]       NVARCHAR (30)  NOT NULL,
    [CreatedAt]   DATETIME2 (7)  NOT NULL CONSTRAINT [DF_Companies_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]   DATETIME2 (7)  NULL,
    [IsDeleted]   BIT            NOT NULL CONSTRAINT [DF_Companies_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_Companies] PRIMARY KEY CLUSTERED ([Id] ASC)
);

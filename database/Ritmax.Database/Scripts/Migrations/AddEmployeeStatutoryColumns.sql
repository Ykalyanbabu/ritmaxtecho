-- Adds Grade, PfNumber, EsiNumber to dbo.Employee. Safe to re-run.
IF COL_LENGTH('dbo.Employee', 'Grade') IS NULL
BEGIN
    ALTER TABLE [dbo].[Employee] ADD [Grade] NVARCHAR (10) NULL;
END
GO

IF COL_LENGTH('dbo.Employee', 'PfNumber') IS NULL
BEGIN
    ALTER TABLE [dbo].[Employee] ADD [PfNumber] NVARCHAR (100) NULL;
END
GO

IF COL_LENGTH('dbo.Employee', 'EsiNumber') IS NULL
BEGIN
    ALTER TABLE [dbo].[Employee] ADD [EsiNumber] NVARCHAR (100) NULL;
END
GO
